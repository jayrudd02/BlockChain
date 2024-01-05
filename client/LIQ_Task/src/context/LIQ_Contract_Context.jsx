import React, { useEffect, useState } from "react";
import { BigNumber, ethers } from "ethers";

import {
  BSC_TestContractABI,
  BSC_TestContractAddress,
  BSC_TestTokenABI,
  BSC_TestTokenAddress,
} from "../utils/constants";
import { toUtf8CodePoints, toUtf8String } from "ethers/lib/utils";

export const BSCTransactionContext = React.createContext();

const { ethereum } = window;

// const [contract, setContract] = useState(null);
// const [tokenContract, setTokenContract] = useState(null);

const getBSCContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    BSC_TestContractAddress,
    BSC_TestContractABI,
    signer
  );

  return transactionContract;
};

const getBSCToken = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    BSC_TestTokenAddress,
    BSC_TestTokenABI,
    signer
  );

  return transactionContract;
};

const contractInstance = getBSCContract();
const tokenInstance = getBSCToken();

if (tokenInstance && contractInstance) {
  // Now you can use contractInstance to interact with your contract
  console.log("BSC Token functions:", tokenInstance.functions);
  console.log("BSC Contract Instance:", contractInstance);
}

export const LIQTransactionProvider = ({ children }) => {
  const [contractFunctions, setContractFunctions] = useState([]);
  const [depositReceipts, setDepositReceipts] = useState([]);
  const [userInfo, setuserInfo] = useState([]);
  const [tokenBalance, setTokenBalance] = useState(0);

  const [formData, setformData] = useState({
    amount: "",
  });

  const handleChange = (e, name) => {
    setformData(prevState => ({ ...prevState, [name]: e.target.value }));
  };

  const getAllFunctions = async () => {
    // const contractInstance = getBSCContract();
    try {
      if (ethereum && contractInstance) {
        if (contractInstance.functions) {
          const availableFunctions = contractInstance.functions;

          console.log("Available Functions Structure:", availableFunctions);

          // Extract Contract function details
          const structuredFunctions = Object.keys(availableFunctions).map(
            funcName => ({
              name: funcName,
            })
          );

          console.log("Structured Functions:", structuredFunctions);

          setContractFunctions(structuredFunctions);
        } else {
          console.error("Functions not available for the contract instance.");
        }
      } else {
        alert(
          "You need to Install Metamask or go to home page and connect wallet"
        );
      }
    } catch (error) {
      console.error("Error getting contract functions:", error);
    }
  };

  const depositTokens = async () => {
    try {
      if (contractInstance && tokenInstance) {
        const { amount } = formData;
        const parsedAmount = ethers.utils.parseEther(amount);

        console.log("amount value parsed: ", amount);

        // Approval
        const approvalTx = await tokenInstance.approve(
          BSC_TestContractAddress,
          parsedAmount
        );
        await approvalTx.wait();

        // Deposit tokens
        const depositTx = await contractInstance.deposit(parsedAmount);
        const depositReceipt = await depositTx.wait();
        const modifiedReceipt = depositReceipt;

        modifiedReceipt.amount = `${amount}`;

        console.log("Modified Deposit Receipt:", modifiedReceipt);

        // Retrieve existing receipts from localStorage
        // const existingReceipts =
        //   JSON.parse(localStorage.getItem("DepositReceipt")) || [];
        // const existingReceipts = localStorage.getItem("DepositReceipt") || [];
        // console.log("existing Receipts: ", existingReceipts);

        // Update state with the new receipt added to the existing array
        setDepositReceipts([modifiedReceipt]);

        // Save the updated array to localStorage
        localStorage.setItem(
          "DepositReceipt",
          JSON.stringify([modifiedReceipt])
        );

        console.log("Tokens Staked successfully!");
        alert("Tokens Staked successfully!");
      } else {
        console.error("Contract instances not available.");
      }
    } catch (error) {
      console.error("Error depositing tokens:", error);
    }
  };

  async function getBalance() {
    if (ethereum) {
      try {
        const accountsResponse = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const accounts = accountsResponse[0];
        const balanceBigNumber = (
          await tokenInstance.balanceOf(accounts)
        ).toString();
        const balance = ethers.utils.formatUnits(balanceBigNumber, 18);
        const roundedBalance = parseFloat(balance).toFixed(2);
        setTokenBalance(roundedBalance);
        console.log("Balance: ", balance);
      } catch (error) {
        console.error("Error getting token balance:", error);
      }
    }
  }

  // const topic1 = tranactions.topics[1];
  // console.log("Topic 1: ", topic1);

  const getAllTransactions = async () => {
    const provider = contractInstance.provider;
    console.log("Provider: ", provider);

    const signer = provider.getSigner();
    console.log("Signer: ", signer);
    const signerAddress = await signer.getAddress();
    console.log("Signer Address: ", signerAddress);

    const userinfo = await contractInstance.userInfo(signerAddress);
    console.log("User info: ", userinfo);
    const amount = ethers.utils.formatEther(BigInt(userinfo.amount._hex));
    console.log("User amount: ", amount);
    console.log(
      "User last deposited at HEX CODE: ",
      userinfo.lastDepositedAt._hex
    );
    // const depositedat = ethers.utils.getAddress(userinfo.lastDepositedAt._hex);

    const hexString = userinfo.lastDepositedAt._hex;
    const decimalValue = ethers.BigNumber.from(hexString).toNumber();
    const timestamp = decimalValue * 1000;
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    console.log("User last deposited at: ", formattedDate);

    const structuredUserInfo = userinfo.map(transaction => ({
      lastDepositedAt: formattedDate,
      amount: amount,
    }));

    setuserInfo(structuredUserInfo[0]);

    console.log(
      "Structured User info amount: ",
      structuredUserInfo[0]["amount"]
    );

    const { receipts } = localStorage.getItem("DepositReceipt");

    console.log("Receipts: ", receipts);
    setDepositReceipts(receipts);
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // EVENT CODE
    // const provider = contractInstance.provider;
    // console.log("Provider: ", provider);

    // const network = await provider.getNetwork();
    // console.log("Network: ", network);

    // const signer = provider.getSigner();
    // console.log("Signer: ", signer);
    // const signerAddress = await signer.getAddress();
    // console.log("Signer Address: ", signerAddress);

    // const bNumber = await provider.getBlockNumber();
    // console.log("Provider blocknumber: ", bNumber);

    // setTimeout(async () => {
    //   // const accountsResponse = await ethereum.request({
    //   //   method: "eth_requestAccounts",
    //   // });
    //   // const accounts = accountsResponse[0];
    //   // console.log("My wallet address: ", accounts);

    //   setTimeout(async () => {
    //     const userinfo = await contractInstance.userInfo(signerAddress);
    //     console.log("User: ", userinfo);
    //     // const addressD = contractInstance.address;
    //     const transactions = contractInstance.filters.Deposit(
    //       signerAddress,
    //       null
    //     );
    //     console.log("Contract Filters: ", transactions);
    //     // const event = contractI.interface.events.Deposit(accounts);

    //     setTimeout(async () => {
    //       console.log("Before Query Filter");
    //       try {
    //         const event = await contractInstance.queryFilter(
    //           transactions,
    //           35982368
    //         );
    //         console.log("After Query Filter");
    //         console.log("Event in contract: ", event);
    //       } catch (error) {
    //         console.log("Error Requesting Logs: ", error);
    //       }
    //       const event = await contractInstance.queryFilter(
    //         "Deposit",
    //         35982368
    //       );
    //       console.log("After Query Filter");
    //       console.log("Event in contract: ", event);
    //     }, 1000);
    //   }, 1000);
    // }, 1000);
    /////////////////////////////////////////////////////////////////////////////////////////////////
  };

  useEffect(() => {
    getAllFunctions();
    getBalance();
    getAllTransactions();
    // localStorage.removeItem("DepositReceipts");
    // fetchDepositReceipts();
  }, []);

  return (
    <BSCTransactionContext.Provider
      value={{
        contractFunctions,
        depositTokens,
        formData,
        handleChange,
        depositReceipts,
        tokenBalance,
        userInfo,
      }}>
      {children}
    </BSCTransactionContext.Provider>
  );
};
