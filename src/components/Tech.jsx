import React from "react";
import technology from "../assets/technology/technology2.mp4";
import data from "../../data.json";
import { useState } from "react";

export function Technology() {
  const [techNumber, setTechNumber] = useState(0);

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
        <source src={technology} />
      </video>

      <section className="tech-container">
        <h2>
          <span>03</span> space launch 101
        </h2>

        <div className="grid-tech">
          <div className="tech-img">
            <picture>
              <source
                media="(min-width: 968px)"
                srcSet={data.technology[techNumber].images.portrait}
              />
              <img src={data.technology[techNumber].images.landscape} alt="" />
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
