import React from "react";
import techBackground from "./../assets/technology/techBackground.mp4";
import data from "../../data.json";
import { useState } from "react";

import launch from "../assets/technology/image-launch-vehicle-portrait.jpg";
import capsule from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceport from "../assets/technology/image-spaceport-portrait.jpg";

import launchLand from "../assets/technology/image-launch-vehicle-landscape.jpg";
import capsulLand from "../assets/technology/image-space-capsule-landscape.jpg";
import spaceportLand from "../assets/technology/image-spaceport-landscape.jpg";

export function Technology() {
  const [techNumber, setTechNumber] = useState(0);

  var tech = [launch, capsule, spaceport];
  var techLand = [launchLand, capsulLand, spaceportLand]

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
              <source media="(max-width: 968px)" srcSet={techLand[techNumber]} />
              <img src={tech[techNumber]} alt="" />
            </picture>
          </div>

          <div className="number-nav">
            <div data-index={0} onClick={techChange} className="num-active num">
              1
            </div>
            <div data-index={1} onClick={techChange} className="num">
              2
            </div>
            <div data-index={2} onClick={techChange} className="num">
              3
            </div>
          </div>

          <div className="info-tech">
            <h2>The Terminology</h2>
            <h1>{data.technology[techNumber].name}</h1>
            <p>{data.technology[techNumber].description}</p>
          </div>
        </div>
      </section>
    </>
  );
}
