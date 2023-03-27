import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SimpleCal from "./components/SimpleCal";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SimpleCounter from "./components/SimpleCounter";
import TempControl from "./components/TempControl";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/simplecal" element={<SimpleCal />}></Route>
          <Route path="/simplecount" element={<SimpleCounter />}></Route>
          <Route path="/tempcontroll" element={<TempControl />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
