import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl hover:blue-glassmorphism">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2  ">
          Services that we
          <br />
          continue to improve
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
      </div>

      <div className=" relative flex-1 flex flex-col justify-start items-center ">
        <div className="  justify-center items-center">
          <div className="absolute top-0 -left-[4%] w-[40%] h-[80%] bg-purple-300 opacity-40 rounded-full filter blur-2xl animate-blob"></div>
          <div className="  absolute top-0 -right-[4%] w-[40%] h-[80%] bg-yellow-300 opacity-40 rounded-full filter blur-2xl animate-blob animation-delay-2000"></div>
          <div className=" absolute -bottom-[4%] left-[25%] w-[40%] h-[80%] bg-pink-300 opacity-40  rounded-full filter blur-2xl animate-blob animation-delay-4000"></div>
          <div className="  absolute -top-[4%] right-[25%] w-[40%] h-[80%] bg-green-300 opacity-40  rounded-full filter blur-2xl animate-blob animation-delay-6000"></div>
        </div>

        <ServiceCard
          color="bg-[#2952E3]"
          title="Security gurantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
      </div>
    </div>
  </div>
);

export default Services;
