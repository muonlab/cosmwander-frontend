import { OfflineSigner } from "@cosmjs/proto-signing";
import { useRouter } from "next/router";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import { getSigner, loadKeplr } from "../services/keplr";
import { chains } from "chain-registry";
import { Chain } from "@chain-registry/types";
import { ChainInfo } from "@keplr-wallet/types";
import { chainRegistryChainToKeplr } from "@chain-registry/keplr";

interface WalletState {
  chain: ChainInfo;
  address?: string;
  signer?: OfflineSigner;
  connectWallet: () => void;
  disconnectWallet: () => void;
}

export const WalletContext = React.createContext<WalletState | null>(null);

const WalletProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { query } = useRouter();
  const [address, setAddress] = useState<string>();
  const [signer, setSigner] = useState<OfflineSigner>();
  const [chain, setChain] = useState<ChainInfo>();
  const [allowPermission, setAllowPermission] = useLocalStorage<boolean>("allowPermission");

  const connectWallet = async () => {
    const chain = chains.find(({ chain_name }) => chain_name === query.chain) as Chain;
    await loadKeplr(chain.chain_id);
    const signer = await getSigner(chain.chain_id);
    if (!signer) return;
    const [{ address }] = await signer.getAccounts();

    setAddress(address);
    setSigner(signer);
    setChain(chainRegistryChainToKeplr(chain, []));
    setAllowPermission(true);
  };

  const disconnectWallet = () => {
    setAddress(undefined);
    setSigner(undefined);
    setAllowPermission(false);
  };

  useEffect(() => {
    if (!allowPermission) return;
    connectWallet();
  }, []);

  return (
    <WalletContext.Provider
      value={
        {
          chain,
          address,
          signer,
          connectWallet,
          disconnectWallet,
        } as WalletState
      }
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = React.useContext(WalletContext);
  if (!context) throw new Error("Wallet Context Provider is not instanced");
  return context;
};

export default WalletProvider;
