import { Navbar, Footer } from "../componets";
import { motion } from "framer-motion";

import ContractDetails from "../componets/LiqStakePage/ContractDetails";
import Deposit from "../componets/LiqStakePage/Deposit";

const LiqTaskPage = () => {
  // useContext(BSCTransactionContext);
  return (
    <>
      <motion.div
        className="min-h-screen"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth }}>
        <div className="gradient-bg-welcome">
          <Navbar />
          <Deposit />
          <ContractDetails />
          {/* <Services /> */}
        </div>

        {/* <Services />

        <Transactions /> */}
        <Footer />
      </motion.div>
    </>
  );
};

export default LiqTaskPage;
