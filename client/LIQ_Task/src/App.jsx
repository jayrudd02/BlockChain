import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./componets/AnimatedRoutes";
// import { Navbar, Footer, Services, Transactions, Welcome } from "./componets";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
