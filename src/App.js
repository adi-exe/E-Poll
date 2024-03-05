import "./App.css";
import Home from "./components/Home";
import Address from "./components/Address";
import { Routes, Route } from "react-router-dom";
import Verify from "./components/Verify";
import Thanks from "./components/Thanks";
import Voting from "./components/Voting";
import Result from "./components/Result";
import Kolkata from "./components/Kolkata";
import Mumbai from "./components/Mumbai";
import { Register } from "./components/register";

function App() {
  return (
    // <div className="App">
    //   <Home />
    // </div>
    <div className="bgrnd">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="address" element={<Address />}></Route>
        <Route path="verify" element={<Verify />}></Route>
        <Route path="thanks" element={<Thanks />}></Route>
        <Route path="voting" element={<Voting />}></Route>
        <Route path="result" element={<Result />}></Route>
        <Route path="kolkata" element={<Kolkata />}></Route>
        <Route path="mumbai" element={<Mumbai />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
