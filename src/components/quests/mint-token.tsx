"use client";

import { useChain, useChains } from "~/hooks/use-chain";
import { Button } from "../ui/button";
import { useWallets } from "@privy-io/react-auth";
import { encodeFunctionData } from "viem";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function MintMagicToken() {
  const { wallets } = useWallets();
  const { sepolia } = useChains();
  const { needSwitch, switchChain } = useChain(sepolia);
  const contractAddress = "0x013cb2854daad8203c6686682f5d876e5d3de4a2";

  const [minting, setMintStatus] = useState(false);
  const mintToken = async () => {
    if (!wallets[0]) return;
    if (needSwitch) await switchChain();

    try {
      setMintStatus(true);
      const provider = await wallets[0].getEthereumProvider();

      const data = encodeFunctionData({
        abi: [
          {
            inputs: [],
            name: "mintDailyAllocation",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        functionName: "mintDailyAllocation",
      });
      const transactionHash = await provider.request({
        method: "eth_sendTransaction",
        params: [{ from: wallets[0].address, to: contractAddress, data }],
      });
      console.log("mintToken", transactionHash);
    } catch (error) {
      console.log("mintToken error", error);
    } finally {
      setMintStatus(false);
    }
  };

  return (
    <div className="py-4 px-6 rounded-lg border border-zinc-200 shadow-lg shadow-zinc-100">
      <h3 className="mb-1">Mint Test Magic Token</h3>
      <p className="mb-4 text-xs text-zinc-400">Mint MAGIC on Sepolia testnet. (Testnet).</p>
      <Button disabled={minting} onClick={mintToken}>
        {minting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <span>Minting</span>
          </>
        ) : (
          <span>Mint</span>
        )}
      </Button>
    </div>
  );
}
