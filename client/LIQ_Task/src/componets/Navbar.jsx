import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import liq_logo from "../assets/liq_logo.png";
import React from "react";
// Users/jakes/Documents/Jay's Stuff/Projects/Blockchain_Projects/web3.0/client/LIQ_Task/src/assets/liq_logo.png

const NavItems = ({ title, classProps }) => {
  return <li className={"mx-4 cursor-pointer " + { classProps }}>{title}</li>;
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex[0.5] flex-initial justify-center items-center">
        <img src={liq_logo} alt="liq logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavItems key={item + index} title={item} />
        ))}
        <li
          className="font-semibold transition duration-500 ease-in-out bg-[#101727] py-2 px-7 mx-4 rounded-full
         cursor-pointer hover:bg-[#16E7D6] hover:text-[#101727] transform hover:-translate-y-1 hover:scale-110 ...">
          Login
        </li>
      </ul>
      <div className="duration-500 flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul
            className="duration-500 z-10 fixed -top-0 -right-2 p-3 w-[45vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100
 text-white animate-slide-in
          ">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => (
                <NavItems
                  key={item + index}
                  title={item}
                  classProps="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
