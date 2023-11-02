import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import close from "../assets/shared/icon-close.svg";
import burger from "../assets/shared/icon-hamburger.svg";
import { useState } from "react";
import { motion } from "framer-motion";

export function Nav() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const links = [
    {
      name: "home",
      to: "/",
    },
    {
      name: "destination",
      to: "/destination",
    },
    {
      name: "crew",
      to: "/crew",
    },

    {
      name: "technology",
      to: "/technology",
    },
  ];

  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className={isMenuClicked ? "mobile-menu" : ""}>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  onClick={() => {
                    setIsMenuClicked(!isMenuClicked);
                  }}
                  to={link.to}
                >
                  <span>0{index}</span> {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <img
          className="burger"
          src={isMenuClicked ? close : burger}
          onClick={() => {
            setIsMenuClicked(!isMenuClicked);
          }}
          alt="hamburger menu"
        />
      </header>
    </>
  );
}
