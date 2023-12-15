import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import {
  BSC_TestContractABI,
  BSC_TestContractAddress,
  BSC_TestTokenABI,
  BSC_TestTokenAddress,
} from "../utils/constants";

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

  // useEffect(() => {
  //   setContract(transactionContract);
  // }, []);

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
  // useEffect(() => {
  //   setTokenContract(transactionContract);
  // }, []);

  return transactionContract;
};

// const contractInstance = await getBSCContract();
// if (contractInstance) {
//   // Now you can use contractInstance to interact with your contract
//   console.log("BSC Contract functions:", contractInstance.functions);
//   console.log("BSC Contract Instance:", contractInstance);
// }

const contractInstance = getBSCContract();
const tokenInstance = getBSCToken();

if (tokenInstance) {
  // Now you can use contractInstance to interact with your contract
  console.log("BSC Token functions:", tokenInstance.functions);
  console.log("BSC Token Instance:", contractInstance);
}

export const LIQTransactionProvider = ({ children }) => {
  const [contractFunctions, setContractFunctions] = useState([]);
  const [depositReceipts, setDepositReceipts] = useState([]);
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
        console.log("Deposit Receipt:", depositReceipt);

        setDepositReceipts(depositReceipt);
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
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const balance = await provider.getBalance(
      //   "0x481E0c66d2cC0bC41AA75D135cC6C7137a5A21EC"
      // );
      // const balanceInEth = ethers.utils.formatEther(balance);
      // console.log(balanceInEth);
      // const accounts3 = ethereum.request({
      //   method: "eth_requestAccounts",
      // });
      // console.log(accounts3[0]);
      // const balanceInWei = await web3.eth.getBalance(walletAddress);
      // const balance = await tokenInstance.balanceOf(accounts3[0]);
      // setTokenBalance(balance);
      // console.log(balanceInWei);
    }
  }

  // const fetchDepositReceipts = async () => {
  //   try {
  //     // Assuming depositReceipts is an array of transaction hashes
  //     const fetchedReceipts = await Promise.all(
  //       depositReceipts.map(async txHash => {
  //         const receipt =
  //           await contractInstance.provider.getTransactionReceipt(txHash);
  //         return receipt;
  //       })
  //     );
  //     console.error("Fetching deposit receipts:", fetchedReceipts);
  //   } catch (error) {
  //     console.error("Error fetching deposit receipts:", error);
  //   }
  // };

  useEffect(() => {
    getAllFunctions();
    getBalance();

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
      }}>
      {children}
    </BSCTransactionContext.Provider>
  );
};
