"use client";

import { useConnectWallet, useWallets } from "@privy-io/react-auth";
import { Button } from "../ui/button";
import { formatString } from "~/lib/utils";
import { LinkBreak2Icon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export default function ConnectButton({ className }: { className: string }) {
  const { connectWallet } = useConnectWallet();
  const { wallets } = useWallets();

  const wallet = wallets[0];
  const [account, setAccount] = useState("");
  useEffect(() => (wallet ? setAccount(wallet.address) : setAccount("")), [wallet]);
  const disconnect = () => {
    setAccount("");
    wallet && wallet.disconnect();
  };

  return (
    <div className={className}>
      {wallet && account ? (
        <Button onClick={disconnect}>
          {formatString(account, 6, 4)} <LinkBreak2Icon className="ml-2" />
        </Button>
      ) : (
        <Button onClick={connectWallet}>Connect Wallet</Button>
      )}
    </div>
  );
}
