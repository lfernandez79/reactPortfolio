import React from "react";
import { motion } from "framer-motion";
import { owner } from "../../data/portfolio";
import "./Welcome.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Welcome() {
  return (
    <section className="hero-section">
      <motion.h1
        className="hero-heading"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span variants={lineVariants}>Hello!</motion.span>
        <br />
        <motion.span variants={lineVariants}>My name is {owner.name}</motion.span>
        <br />
        <motion.span className="hero-subtitle" variants={lineVariants}>
          {owner.title}
        </motion.span>
      </motion.h1>
    </section>
  );
}

export default Welcome;
