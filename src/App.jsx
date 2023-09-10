//import "./App.css";
import Balance from "./components/Filter";
import Form from "./components/Form";
import Layout from "./components/Layout";
import Transactions from "./components/tasks/Tasklist";

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
