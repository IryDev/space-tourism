import React from "react";
import techBackground from "./../assets/technology/techBackground.mp4";
import data from "../../data.json";
import { useState } from "react";
import { motion } from "framer-motion";

import launch from "../assets/technology/image-launch-vehicle-portrait.jpg";
import capsule from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceport from "../assets/technology/image-spaceport-portrait.jpg";

import launchLand from "../assets/technology/image-launch-vehicle-landscape.jpg";
import capsuleLand from "../assets/technology/image-space-capsule-landscape.jpg";
import spaceportLand from "../assets/technology/image-spaceport-landscape.jpg";

export function Technology() {
  const [techNumber, setTechNumber] = useState(0);

  const techs = [
    {
      src: launch,
      srcLand: launchLand,
      className: "num num-active",
    },

    {
      src: spaceport,
      srcLand: spaceportLand,
      className: "num",
    },

    {
      src: capsule,
      srcLand: capsuleLand,
      className: "num",
    },
  ];

  function techChange(e) {
    setTechNumber(e.target.dataset.index);
    var list = document.querySelectorAll(".num");
    for (var i = 0; i < list.length; ++i) {
      list[i].classList.remove("num-active");
    }
    e.target.classList.add("num-active");
  }

  return (
    <>
      <video muted loop autoPlay>
        <source src={techBackground} />
      </video>

      <section className="tech-container">
        <h2>
          <span>03</span> space launch 101
        </h2>

        <div className="grid-tech">
          <div className="tech-img">
            <picture>
              <source
                media="(max-width: 968px)"
                srcSet={techs[techNumber].srcLand}
              />
              <img
                src={techs[techNumber].src}
                alt={data.technology[techNumber].name}
              />
            </picture>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="number-nav"
          >
            {techs.map((tech, index) => (
              <div
                key={index}
                data-index={index}
                onClick={techChange}
                className={tech.className}
              >
                {index + 1}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="info-tech"
          >
            <h2>The Terminology</h2>
            <h1>{data.technology[techNumber].name}</h1>
            <p>{data.technology[techNumber].description}</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
