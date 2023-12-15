import React from "react";
import CustomPage from "../pages/CustomPage";
import LiqTaskPage from "../pages/LIQ_Task_Page";
import ErrorPage from "../pages/ErrorPage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { TransactionsProvider } from "../context/TransactionContext";
import { LIQTransactionProvider } from "../context/LIQ_Contract_Context";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          index
          path="/CustomPage"
          element={
            <TransactionsProvider>
              <CustomPage />
            </TransactionsProvider>
          }
        />
        {/* <Route path="/CustomPage" element={<CustomPage />} /> */}
        {/* <Route
          path="/CustomPage"
          element={
            <TransactionsProvider>
              <CustomPage />
            </TransactionsProvider>
          }
        /> */}
        {/* <Route path="/LiqtaskPage" element={<LiqTaskPage />} /> */}
        <Route
          path="/LiqtaskPage"
          element={
            // <LiqTaskPage />
            <LIQTransactionProvider>
              <LiqTaskPage />
            </LIQTransactionProvider>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
