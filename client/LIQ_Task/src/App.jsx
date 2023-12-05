import { Navbar, Footer, Services, Transactions, Welcome } from "./componets";

const App = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
          {/* <Services /> */}
        </div>

        <Services />

        <Transactions />
        <Footer />
      </div>
    </>
  );
};

export default App;
