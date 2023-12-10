import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import React, { useContext, useState } from "react";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import useFetch from "../hooks/useFetch";

import { Loader } from "./";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={e => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const animatedHeaderText =
  "text-2xl sm:text-2xl md:text-2xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient";
// const liqPrice = useFetch("");
const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    handleChange,
    sendTransaction,
    isLoading,
  } = useContext(TransactionContext);

  const [loading, setLoading] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  const handleClick = () => {
    setLoading(true);

    // Simulate a delay (2 seconds) before showing the price
    setTimeout(() => {
      setLoading(false);
      setShowPrice(true);
    }, 2000);
  };

  const liqPrice = useFetch("");

  const handleSubmit = e => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center item-center">
      <div className="flex mf:flex-row flex-col items-start justify-center md:20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          {/* <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1> */}
          <h1 className="text-3xl sm:text-3xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient">
            Send Crypto <br /> across the world
          </h1>
          <p className="font-semibold text-left mt-5 text-white md:w-9/12 w-11/12 text-base">
            Explore the world of LIQ . Buy, sell, and stake cryptocurrencies
            easily on{" "}
            <a
              href="https://liquidus.finance/#farm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline transition duration-500 ease-in-out hover:text-[#16E7D6] cursor-pointer">
              LIQUIDUS Finance
            </a>
            .
          </p>
          <br />
          <br />
          <div className=" p-5 sm:w-96 flex flex-col justify-start items-center blue-glassmorphism w-full ">
            <div className=" w-full flex flex-col justify-start items-center">
              <h2 className={animatedHeaderText}>LIQ Price</h2>
              <div className="items-center text-white font-bold text-1xl">
                <span>{liqPrice}</span>
              </div>
            </div>
            <br />
            <div className="w-full flex flex-col justify-start items-center">
              <h3 className={animatedHeaderText}>Predicted Price Tomorrow</h3>
              {loading ? (
                <Loader />
              ) : showPrice ? (
                <div
                  className="items-center text-[#101727] font-bold text-1xl price-card transition duration-500 ease-in-out w-[50%] hover:text-[#101727] transform hover:-translate-y-1 hover:scale-30 ... cursor-pointer"
                  onClick={handleClick}>
                  <span>{"$ 0,08039"}</span>
                </div>
              ) : (
                <div
                  className="items-center text-[#101727] font-bold text-1xl price-card transition duration-500 ease-in-out w-[50%] hover:text-[#101727] transform hover:-translate-y-1 hover:scale-30 ... cursor-pointer"
                  onClick={handleClick}>
                  <span>{"AI GO >"}</span>
                </div>
              )}
            </div>
          </div>
          <br />
          <br />
          {!currentAccount && (
            <div className="relative inline-flex  group">
              <div
                className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r 
            from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 
            group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <a
                href="#"
                onClick={connectWallet}
                title="Connect your crypto wallet"
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold
               text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none 
               focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transform hover:-translate-y-1 hover:scale-110"
                role="button">
                <AiFillPlayCircle className="text-white mr-2" />
                Connect Wallet
              </a>
            </div>
          )}
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 white-glassmorphism">
            <div
              className={`rounded-tl-2xl font-semibold ${companyCommonStyles}`}>
              Reliable
            </div>
            <div className={`font-semibold ${companyCommonStyles}`}>
              Secure
            </div>
            <div
              className={`sm:rounded-tr-2xl font-semibold ${companyCommonStyles}`}>
              Simple
            </div>
            <div
              className={`sm:rounded-bl-2xl font-semibold ${companyCommonStyles}`}>
              Best Returns
            </div>
            <div className={`font-semibold ${companyCommonStyles}`}>Free</div>
            <div
              className={`rounded-br-2xl font-semibold ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        {/* <div className=" relative flex flex-col flex-1 items-center justify-start w-full  ">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism "></div>
        </div> */}

        {/* <div className="relative flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="relative group "> */}
        {/* <div
              className="transitiona-all duration-1000 absolute rounded-xl opacity-70 -inset-px bg-gradient-to-r from-[#fb7076] via-[#f75596] to-[#98e79c] blur-lg group-hover:opacity-100 
            group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div> */}
        <div className=" relative flex flex-col flex-1 items-center justify-start w-full">
          <div className="transition-all duration-200 p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism transform hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  MetaMask
                </p>
              </div>
            </div>
          </div>
          {/* </div>
          </div> */}
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={e => handleSubmit(e)}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                Send now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
