// import { useState } from "react";
import {
  THEME,
  TonConnectUIProvider,
  TonConnectButton,
} from "@tonconnect/ui-react";

import "./App.css";
import Pay from "./pay";
import Donate from "./donate";

function App() {
  return (
    <>
      <TonConnectUIProvider
        manifestUrl="https://maluka720.github.io/tma-demo/tonconnect-manifest.json"
        uiPreferences={{ theme: THEME.LIGHT }}
        walletsListConfiguration={{
          includeWallets: [
            {
              appName: "tonwallet",
              name: "TON Wallet",
              imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
              aboutUrl:
                "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
              universalLink: "https://wallet.ton.org/ton-connect",
              jsBridgeKey: "tonwallet",
              bridgeUrl: "https://bridge.tonapi.io/bridge",
              platforms: ["chrome", "android", "ios", "macos"],
            },
          ],
        }}
        actionsConfiguration={{
          twaReturnUrl: "https://t.me/SmartTradeSystemBot/start",
        }}
      >
        <h2 style={{ color: "#0088cc" }}>Smart Trade</h2>
        <TonConnectButton></TonConnectButton>
        {/* Here we add our button with alert callback */}
        <Pay></Pay>
        <Donate></Donate>
      </TonConnectUIProvider>
    </>
  );
}

export default App;
