"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider, Chain } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const treasureRuby: Chain = {
  id: 978657,
  name: "Treasure Ruby",
  iconUrl:
    "https://app.treasure.lol/images/upload/w_100,f_png/v1713836485/Treasure_Testnet_Ruby_Icon_nsqqra.png",
  nativeCurrency: { name: "Magic", symbol: "MAGIC", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-testnet.treasure.lol/http"],
    },
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://testnet.treasurescan.io",
      apiUrl: "https://testnet.treasurescan.io/node-api/proxy/api/v2",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const config = getDefaultConfig({
    appName: "My RainbowKit App",
    projectId: "679e622f7923c5fc768c1be62287a22f",
    chains: [treasureRuby],
    ssr: true,
  });
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
