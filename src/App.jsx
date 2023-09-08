//import "./App.css";
import Layout from "./components/Layout";
import Form from "./components/Form";
import Transactions from "./components/transactions/Tasklist";
import Balance from "./components/Filter";

function App() {
  return (
    <Layout>
      <>
        <Balance />
        <Form />
        <Transactions />
      </>
    </Layout>
  );
}

export default App;
