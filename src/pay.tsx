import WebApp from "@twa-dev/sdk";

function Pay() {
  return (
    <>
      <div className="card">
        <button
          style={{ backgroundColor: "#0088cc", color: "#fff" }}
          onClick={() => WebApp.showAlert(`Hello World! `)}
        >
          Pay
        </button>
      </div>
    </>
  );
}

export default Pay;
