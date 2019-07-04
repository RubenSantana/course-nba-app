import React from "react";
import { Link } from "react-router-dom";
import style from "./header.css";
import FontAwesome from "react-fontawesome";

const Header = () => {
  const navBars = () => (
    <div className={style.bars}>
      <FontAwesome name="bars" />
    </div>
  );

  const logo = () => (
    <Link to="/" className={style.logo}>
      <img src="images/nba_logo.png" alt="NBA logo" />
    </Link>
  );

  return (
    <header className={style.header}>
      <div className={style.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;
