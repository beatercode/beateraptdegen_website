import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import "../index.css";
import "../Colours.css";
import "../noise.css";

import Hero from "../components/home/Hero";
import Oniparts from "../components/home/Oniparts";
import Oniintro from "../components/home/Oniintro";
import Onitypes from "../components/home/Onitypes";
import Oniexamples from "../components/home/Oniexamples";
import Roadmap from "../components/home/Roadmap";
import Park from "../components/home/Park";
import Teamintro from "../components/home/Teamintro";
import Team from "../components/home/Team";
import Featured from "../components/home/Featured";
import Footer from "../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <React.StrictMode>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Aptos Shogun experience</title>
          <link rel="canonical" href="https://aptosshogun.com" />
          <meta
            name="description"
            content="Aptos Shogun NFT collection and virtual experience"
          />
        </Helmet>
        <div className="noise"></div>
        <Hero />
        <Oniparts />
        <Oniintro />
        <Onitypes />
        <Oniexamples />
        <Roadmap />
        <Park />
        <Teamintro />
        <Team />
        <Footer />
        <Featured />
      </motion.div>
    </React.StrictMode>
  );
}

export default Home;
