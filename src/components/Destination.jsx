import React from "react";
import destinationBackground from "./../assets/destination/destinationBackground.mp4";
import data from "../../data.json";
import { useState } from "react";
import { motion } from "framer-motion";

import moon from "../assets/destination/image-moon.webp";
import mars from "../assets/destination/image-mars.webp";
import europa from "../assets/destination/image-europa.webp";
import titan from "../assets/destination/image-titan.webp";

export function Destination() {
  const [planetNumber, setPlanetNumber] = useState(0);

  const planetsLinks = [
    {
      name: "moon",
      src: moon,
      className: "planet active",
    },

    {
      name: "mars",
      src: mars,
      className: "planet",
    },
    {
      name: "europa",
      src: europa,
      className: "planet",
    },
    {
      name: "titan",
      src: titan,
      className: "planet",
    },
  ];

  function planetChange(e) {
    setPlanetNumber(e.target.dataset.index);
    var list = document.querySelectorAll(".planet");
    for (var i = 0; i < list.length; ++i) {
      list[i].classList.remove("active");
    }
    e.target.classList.add("active");
  }

  return (
    <>
      <video autoPlay loop muted>
        <source src={destinationBackground} type="video/mp4" />
      </video>

      <section className="destination-container">
        <h2>
          <span>01</span> Pick up your destination
        </h2>

        <div className="planet-info">
          <motion.div
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <img
              src={planetsLinks[planetNumber].src}
              alt={data.destinations[planetNumber].name}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ul>
              {planetsLinks.map((planet, index) => (
                <li
                  key={index}
                  data-index={index}
                  onClick={planetChange}
                  className={planet.className}
                >
                  {planet.name}
                </li>
              ))}
            </ul>

            <h1>{data.destinations[planetNumber].name}</h1>

            <p>{data.destinations[planetNumber].description}</p>

            <div className="line"></div>

            <div className="more-info">
              <h2>
                avg. distance{" "}
                <span>{data.destinations[planetNumber].distance}</span>
              </h2>

              <h2>
                est. travel time{" "}
                <span>{data.destinations[planetNumber].travel}</span>
              </h2>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
