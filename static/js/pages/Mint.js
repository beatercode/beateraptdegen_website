import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import Mintready from "../components/mint/Mintready";

import "../index.css";
import "../Colours.css";
import "../noise.css";
import "../components/mint/Mint.css";

function Mint() {
  return (
    <React.StrictMode>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Aptos Shoguns Mint your oni soon</title>
          <link rel="canonical" href="https://aptosshoguns.com" />
          <meta
            name="description"
            content="Aptos Shoguns NFT collection and virtual experience"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.0-rc.0/web3.min.js"
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          ></script>
          <script
            type="text/javascript"
            src="https://rampp.xyz/embeds/embed.js"
          ></script>
        </Helmet>
        <div className="noise"></div>
        <Mintready />
      </motion.div>
    </React.StrictMode>
  );
}

export default Mint;
