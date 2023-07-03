import React from "react";
import bckgVideo from "../assets/home/space.mp4";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Home() {
  return (
    <>
      <video autoPlay loop muted>
        <source src={bckgVideo} type="video/mp4" />
      </video>
      <section className="home-container container">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="explore"
        >
          <Link to="/Destination">Explore</Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>So, you want to travel to</h2>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </motion.div>
      </section>
    </>
  );
}
