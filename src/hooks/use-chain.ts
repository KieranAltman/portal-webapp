"use client";

import { useWallets } from "@privy-io/react-auth";
import { useMemo } from "react";
import { defineChain } from "viem";
import { Chain, sepolia } from "viem/chains";

export function useChains() {
  const treasureRuby = defineChain({
    id: 978657, // Replace this with your chain's ID
    name: "Treasure Ruby",
    network: "Treasure Ruby",
    nativeCurrency: {
      decimals: 18,
      name: "Treasure Magic",
      symbol: "MAGIC",
    },
    rpcUrls: {
      default: {
        http: ["https://rpc-testnet.treasure.lol/http"],
        webSocket: [""],
      },
    },
    blockExplorers: {
      default: { name: "Treasure Scan", url: "https://testnet.treasurescan.io" },
    },
  });

  return {
    chains: [treasureRuby, sepolia],
    treasureRuby,
    sepolia,
  };
}

export function useChain(targetChain: Chain) {
  const { wallets } = useWallets();

  const needSwitch = useMemo(() => {
    const chainId = parseInt(wallets[0]?.chainId.replace("eip155:", "")) ?? null;
    return chainId !== targetChain.id;
  }, [wallets]);

  const switchChain = async () => {
    if (!wallets[0]) return;
    await wallets[0].switchChain(targetChain.id);
  };

  return {
    needSwitch,
    switchChain,
  };
}
