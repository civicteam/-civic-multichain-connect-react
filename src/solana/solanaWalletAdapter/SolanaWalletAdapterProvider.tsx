import React, { ReactElement, useEffect, useMemo } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Chain, SolanaChain, WalletContextType } from "../../types";
import useChain from "../../useChain";

export const SolanaWalletAdapterContext =
  React.createContext<WalletContextType>({} as WalletContextType);

// Create the context provider component
export default function SolanaWalletAdapterProvider({
  children,
  chains,
}: {
  children: React.ReactNode;
  chains: SolanaChain[];
}): ReactElement {
  const { wallet, connected } = useWallet();
  const adapter = useWallet();
  const { setSelectedChain } = useChain();
  const { connection } = useConnection();

  const context = useMemo(
    () => ({
      // Figure out how to get the wallet from the adapter
      wallet: adapter.wallet ? adapter : undefined,
      connected,
    }),
    [adapter, connected]
  );

  useEffect(() => {
    if (wallet) {
      const chain = chains.filter(
        (c) => c.connection.rpcEndpoint === connection.rpcEndpoint
      );
      setSelectedChain(chain[0] as Chain);
    }
  }, [chains, connection, setSelectedChain, wallet]);

  return (
    <SolanaWalletAdapterContext.Provider value={context}>
      {children}
    </SolanaWalletAdapterContext.Provider>
  );
}
