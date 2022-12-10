import "../styles/globals.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {

  const [walletAdress, setWalletAdress] = useState (null)
  const checkIfWalletIsConnected = async () => {
    const { solana } = window;

    if (solana) {
      if (solana.isPhantom) {
        console.log("Phantom wallet was found");
        const response = await solana.connect({ onlyIfTrusted: true });
        setWalletAdress(response.publicKey.toString());
      }
    }  else {
      console.log("Phatom wallet wasn't found");
    }
  };

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };

    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  const connectWallet = async() => {
    
    const { solana } = window;

    if (solana) {
      if (solana.isPhantom) {
        const response = await solana.connect();
        console.log("Connect with a public key: ", response.publicKey.toString());
        setWalletAdress(response.publicKey.toString());

      }
    }  else {
      console.log("Phatom wallet wasn't found");
    }
  }

  return (
    <div>
      {
        !walletAdress && (
          
          <div className = {styles.container}>
            <img href="../public/SVC_MONEDA SMARTVERSO.png"></img>
            <button
            className = {styles.walletButton}
            onClick = {connectWallet}
            >
              Conectar Wallet
            </button>
          </div>
        )
      }
      <div>
        <main>
          <nav className="border-b p-6">
            <p className="text-4xl font-bold">NFT SmartVerso</p>
            <div className="flex mt-4">
              <Link href="/">
                <a className="mr-4">Inicio</a>
              </Link>
              <Link href="/add-movie">
                <a className="mr-6">Agregar NFT</a>
              </Link>
              <Link href="/my-movies">
                <a className="mr-6">Mis NFT</a>
              </Link>
            </div>
          </nav>
        </main>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
