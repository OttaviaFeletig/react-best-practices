import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Cleanup from "./views/Cleanup";
import ContextAndHook from "./views/ContextAndHook";
import CustomHook from "./views/CustomHook";
import Home from "./views/Home";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cleanup" element={<Cleanup />} />
        <Route path="/customHook" element={<CustomHook />} />
        <Route path="/contextAndCustomHook" element={<ContextAndHook />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
