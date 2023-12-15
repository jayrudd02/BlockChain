import React, { useContext, useState } from "react";

import { BSCTransactionContext } from "../../context/LIQ_Contract_Context";

const ContractDetails = () => {
  //   const contractFunctions = [
  //     "transfer",
  //     "approve",
  //     "balanceOf",
  //     "transferFrom",
  //     "allowance",
  //     "mint",
  //     "burn",
  //     "totalSupply",
  //     "pause",
  //     "unpause",
  //     "initialize",
  //     "upgrade",
  //     "getOwner",
  //     "setName",
  //     "setSymbol",
  //   ];

  const { contractFunctions } = useContext(BSCTransactionContext);

  return (
    <>
      <div className=" relative w-4/5 h-screen py-12 px-4 mx-auto">
        <br />
        <div className="  justify-center items-center ">
          <div className="absolute top-0 -left-[4%] w-[40%] h-[80%] bg-purple-300 opacity-40 rounded-full filter blur-2xl animate-blob"></div>
          <div className="  absolute top-0 -right-[4%] w-[40%] h-[80%] bg-yellow-300 opacity-40 rounded-full filter blur-2xl animate-blob animation-delay-2000"></div>
          <div className=" absolute -bottom-[4%] left-[25%] w-[40%] h-[80%] bg-pink-300 opacity-40  rounded-full filter blur-2xl animate-blob animation-delay-4000"></div>
          <div className="  absolute -top-[4%] right-[25%] w-[40%] h-[80%] bg-green-300 opacity-40  rounded-full filter blur-2xl animate-blob animation-delay-6000"></div>
        </div>
        <div className=" relative w-4/5 mx-auto p-6 bg-slate-800 rounded-md shadow-md ">
          <h1 className="text-3xl sm:text-3xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient">
            Contract Details
          </h1>
          <div className="mb-6">
            <h2 className="text-xl text-white font-semibold mb-2">
              Contract Functions
            </h2>
            <ul className="flex flex-wrap justify-center items-center">
              {contractFunctions.map((func, index) => (
                <li
                  key={index}
                  className="text-white border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer m-2">
                  {/* Displaying function name */}
                  <div className="text-white">{func.name}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractDetails;
