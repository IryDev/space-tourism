import React from "react";
import crewBackground from "../assets/crew/crew-background.mp4";
import data from "../../data.json";
import { useState } from "react";

export function Crew() {
  const [crewNumber, setCrewNumber] = useState(0);

  function crewChange(e) {
    setCrewNumber(e.target.dataset.index);
    var list = document.querySelectorAll(".selector");
    for (var i = 0; i < list.length; ++i) {
      list[i].classList.remove("selector-active");
    }
    e.target.classList.add("selector-active");
  }

  return (
    <>
      <video autoPlay muted loop>
        <source src={crewBackground} />
      </video>

      <section className="crew-container">
        <h2>
          <span>02</span> meet your crew
        </h2>
        <div className="crew-grid">
          <div className="hero-img">
            <picture>
              <source src={data.crew[crewNumber].images.webp} />
              <img
                src={data.crew[crewNumber].images.webp}
                alt={data.crew[crewNumber].name}
              />
            </picture>
            <div className="line"></div>
          </div>

          <div className="crew-info">
            <div className="selector-container">
              <div
                data-index={0}
                onClick={crewChange}
                className="selector selector-active"
              ></div>
              <div
                data-index={1}
                onClick={crewChange}
                className="selector"
              ></div>
              <div
                data-index={2}
                onClick={crewChange}
                className="selector"
              ></div>
              <div
                data-index={3}
                onClick={crewChange}
                className="selector"
              ></div>
            </div>
            <div className="crew-member">
              <h2>{data.crew[crewNumber].role}</h2>
              <h1>{data.crew[crewNumber].name}</h1>
              <p>{data.crew[crewNumber].bio}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
