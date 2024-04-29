"use client";

import React from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { useChains } from "~/hooks/use-chain";

export default function PrivyProviderContainer({ children }: { children: React.ReactNode }) {
  const appId = "clvf15xya0i7rldfqv713he74";
  const { chains, treasureRuby } = useChains();

  return (
    <PrivyProvider
      appId={appId}
      config={{
        loginMethods: ["wallet"],
        defaultChain: treasureRuby,
        supportedChains: chains,
      }}
    >
      {children}
    </PrivyProvider>
  );
}
