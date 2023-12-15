import { Navbar, Footer, Services, Transactions, Welcome } from "../componets";
import { motion } from "framer-motion";

const CustomPage = () => {
  return (
    <>
      <motion.div
        className="min-h-screen"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth }}>
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
          {/* <Services /> */}
        </div>

        <Services />

        <Transactions />
        <Footer />
      </motion.div>
    </>
  );
};

export default CustomPage;
