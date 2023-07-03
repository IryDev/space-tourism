import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import close from "../assets/shared/icon-close.svg";
import burger from "../assets/shared/icon-hamburger.svg";
import { useState } from "react";
import { motion } from 'framer-motion';

export function Nav() {
  const [burger_class, setBurgerClass] = useState("burger unclicked");
  const [menu_class, setMenuClass] = useState("navbar");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isMenuOpen, toggleMenu] = useState(false);
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

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger clicked");
      setMenuClass("navbar mobile-menu");
    } else {
      setBurgerClass("burger unclicked");
      setMenuClass("navbar");
    }

    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className={menu_class}>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <NavLink onClick={updateMenu} to={link.to}>
                  <span>0{index}</span> {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <img
          className={burger_class}
          src={burger}
          onClick={updateMenu}
          alt="hamburger menu"
        />
      </header>
    </>
  );
}
