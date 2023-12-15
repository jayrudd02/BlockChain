import React, { useContext, useState } from "react";
// import { AiFillPlayCircle } from "react-icons/ai";
import { SiMetabase } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { BSCTransactionContext } from "../../context/LIQ_Contract_Context";
// import { TransactionContext } from "../../context/TransactionContext";

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

const Deposit = () => {
  const {
    depositTokens,
    formData,
    handleChange,
    depositReceipts,
    tokenBalance,
  } = useContext(BSCTransactionContext);

  const handleSubmit = e => {
    const { amount } = formData;

    e.preventDefault();

    if (!amount) return;

    depositTokens();
  };

  return (
    <>
      <div className="relative  w-4/5 py-40 px-4 mx-auto  justify-center items-center">
        <div className=" relative mx-auto p-5 sm:w-4/5 flex w-full flex-row items-center blue-glassmorphism ">
          {/* Inputs on the left */}
          <div className="flex flex-col justify-start items-center sm:w-[65%] w-full mb-4">
            <div className="flex flex-col w-full">
              <h1 className="text-3xl sm:text-3xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient">
                LIQUIDUS Token Staking
              </h1>
              <br />
              <h1 className="text-xl sm:text-xl md:text-xl font-semibold text-white">
                Enter the amount of LIQ you would like to stake:
              </h1>
              <Input
                placeholder="Amount (LIQ)"
                name="amount"
                type="number"
                handleChange={handleChange}
              />
            </div>
            <br />
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            <button
              className=" items-center text-[#101727] font-bold text-1xl price-card transition duration-500 ease-in-out w-[85%] hover:text-[#101727] transform hover:-translate-y-1 hover:scale-30 ... cursor-pointer"
              onClick={e => handleSubmit(e)}>
              Stake
            </button>
          </div>

          {/* Three evenly spaced square divs below each other on the right */}
          <div className="sm:w-[65%] w-full p-5 flex-1">
            <div className="h-full  flex flex-col justify-center items-center">
              <div
                className="text-white border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-md  mb-2 w-[80%]"
                style={{ height: "100px" }}>
                Total Supply:
              </div>
              <div
                className="text-white border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-md  mb-2 w-[80%]"
                style={{ height: "100px" }}>
                Circulating Supply
              </div>
              <div
                className="text-white border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-md  mb-2 w-[80%]"
                style={{ height: "100px" }}>
                Balance: {tokenBalance}
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-3xl sm:text-3xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient">
          Deposit History
        </h1>
        <div className="mb-6">
          <ul className="flex flex-wrap justify-center items-center">
            <li
              //   key={index}
              className="text-white border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-md cursor-pointer m-2">
              <div className="text-white">To: {depositReceipts.to}</div>
              <div className="text-white">From: {depositReceipts.from}</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Deposit;
