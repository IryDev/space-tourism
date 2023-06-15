import React from "react";
import bckgVideo from "../assets/home/space.mp4";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <video autoPlay loop muted>
        <source src={bckgVideo} type="video/mp4" />
      </video>
      <section className="home-container container">
        <div className="explore">
          <Link to="/Destination">Explore</Link>
        </div>

        <div>
          <h2>So, you want to travel to</h2>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </section>
    </>
  );
}
