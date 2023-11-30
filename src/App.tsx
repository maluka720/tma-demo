// import { useState } from "react";
import "./App.css";
import Pay from "./pay";
import Donate from "./donate";

function App() {
  return (
    <>
      <h2 style={{ color: "#0088cc" }}>Smart Trade</h2>
      {/* Here we add our button with alert callback */}
      <Pay></Pay>
      <Donate></Donate>
    </>
  );
}

export default App;
