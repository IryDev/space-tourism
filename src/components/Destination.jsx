import React from "react";
import destinationBackground from "./../assets/destination/destinationBackground.mp4";
import data from "../../data.json";
import { useState } from "react";

import moon from "../assets/destination/image-moon.webp";
import mars from "../assets/destination/image-mars.webp";
import europa from "../assets/destination/image-europa.webp";
import titan from "../assets/destination/image-titan.webp";

export function Destination() {
  const [planetNumber, setPlanetNumber] = useState(0);

  var planets = [moon, mars, europa, titan];

  function planetChange(e) {
    setPlanetNumber(e.target.dataset.index);
    var list = document.querySelectorAll(".planet");
    for (var i = 0; i < list.length; ++i){
      list[i].classList.remove("active")
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
          <img src={planets[planetNumber]} alt={data.destinations[planetNumber].name} />

          <div>
            <ul>
              <li
                data-index={0}
                onClick={planetChange}
                className="planet active"
              >
                moon
              </li>
              <li data-index={1} onClick={planetChange} className="planet">
                mars
              </li>
              <li data-index={2} onClick={planetChange} className="planet">
                europa
              </li>
              <li data-index={3} onClick={planetChange} className="planet">
                titan
              </li>
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
          </div>
        </div>
      </section>
    </>
  );
}
