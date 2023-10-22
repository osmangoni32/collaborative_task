//import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PublicOutlet from "./components/PublicOutlet";
import Home from "./components/pages/Home";
import Tasks from "./components/pages/Tasks";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/tasks" element={<Tasks />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<PublicOutlet />}>
          <Route path="/tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
