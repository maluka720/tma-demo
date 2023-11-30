// import { useState } from "react";
import {
  SendTransactionRequest,
  useTonConnectUI,
  useTonWallet,
} from "@tonconnect/ui-react";

const defaultTx: SendTransactionRequest = {
  // The transaction is valid for 10 minutes from now, in unix epoch seconds.
  validUntil: Math.floor(Date.now() / 1000) + 600,
  messages: [
    {
      // The receiver's address.
      address: "UQA7bSrav0pTxqIcdraNooubFRu19o_KeAF13vHkdneIvlrk",
      // Amount to send in nanoTON. For example, 0.005 TON is 5000000 nanoTON.
      amount: "10000000", // 0.01 TON
      // // (optional) State initialization in boc base64 format.
      // stateInit:
      //   "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
      // // (optional) Payload in boc base64 format.
      // payload: "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g==",
    },

    // Uncomment the following message to send two messages in one transaction.
    /*
    {
      // Note: Funds sent to this address will not be returned back to the sender.
      address: '0:2ecf5e47d591eb67fa6c56b02b6bb1de6a530855e16ad3082eaa59859e8d5fdc',
      amount: toNano('0.01').toString(),
    }
    */
  ],
};

function Donate() {
  // const [tx, setTx] = useState(defaultTx);
  const wallet = useTonWallet();
  const [tonConnectUi] = useTonConnectUI();

  return (
    <>
      <div className="card">
        {wallet ? (
          <button onClick={() => tonConnectUi.sendTransaction(defaultTx)}>
            Donate 0.01 TON
          </button>
        ) : (
          <button onClick={() => tonConnectUi.openModal()}>Donate</button>
        )}
      </div>
    </>
  );
}

export default Donate;
