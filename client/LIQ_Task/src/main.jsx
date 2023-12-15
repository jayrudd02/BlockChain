import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TransactionsProvider } from "./context/TransactionContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <TransactionsProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </TransactionsProvider>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/CustomPage"
//           element={
//             <TransactionsProvider>
//               <CustomPage />
//             </TransactionsProvider>
//           }
//         />
//         <Route
//           path="/LiqtaskPage"
//           element={
//             <LIQTransactionProvider>
//               <LiqTaskPage />
//             </LIQTransactionProvider>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );
