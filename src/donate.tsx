import WebApp from "@twa-dev/sdk";

function Donate() {
  return (
    <>
      <div className="card">
        <button onClick={() => WebApp.showAlert(`coming soon `)}>
          Donate 1$
        </button>
      </div>
    </>
  );
}

export default Donate;
