// import { useState } from "react";
import WebApp from "@twa-dev/sdk";
import "./App.css";

function App() {
  return (
    <>
      <h2 style={{ color: "#0088cc" }}>Smart Trade</h2>
      {/* Here we add our button with alert callback */}
      <div className="card">
        <button
          style={{ backgroundColor: "#0088cc", color: "#fff" }}
          onClick={() => WebApp.showAlert(`Hello World! `)}
        >
          充值
        </button>
      </div>
      <div className="card">
        <button onClick={() => WebApp.showAlert(`coming soon `)}>赞助</button>
      </div>
      {/* <div className="card">
        <button onClick={() => WebApp.showAlert(`coming soon `)}>下单</button>
      </div> */}
    </>
  );
}

export default App;
