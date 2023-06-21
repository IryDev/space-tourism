import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import burger from "../assets/shared/icon-hamburger.svg";
import { useState } from "react";

export function Nav() {
  const [burger_class, setBurgerClass] = useState("burger unclicked");
  const [menu_class, setMenuClass] = useState("navbar");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isMenuOpen, toggleMenu] = useState(false);

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
            <li>
              <NavLink onClick={updateMenu} to="/">
                <span>00</span> Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={updateMenu} to="/destination">
                <span>01</span> Destination
              </NavLink>
            </li>
            <li>
              <NavLink onClick={updateMenu} to="/crew">
                <span>02</span> Crew
              </NavLink>
            </li>
            <li>
              <NavLink onClick={updateMenu} to="/technology">
                <span>03</span> Technology
              </NavLink>
            </li>
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
