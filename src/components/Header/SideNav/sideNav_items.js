import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import style from "./sideNav.css";

const SideNavItems = () => {
  const items = [
    {
      type: style.option,
      icon: "home",
      text: "Home",
      link: "/"
    },
    {
      type: style.option,
      icon: "file-text-o",
      text: "News",
      link: "/news"
    },
    {
      type: style.option,
      icon: "play",
      text: "Videos",
      link: "/videos"
    },
    {
      type: style.option,
      icon: "sign-in",
      text: "Sign in",
      link: "/sign-in"
    }
  ];

  const showItems = () => {
    return items.map((item, i) => {
      return (
        <div key={i} className={item.type}>
          <Link to={item.link}>
            <FontAwesome name={item.icon} />
            {item.text}
          </Link>
        </div>
      );
    });
  };

  /*
  <div className={style.option}>
    <Link to="/">
      <FontAwesome name="home" />
      Home
    </Link>
  </div>

 */

  return <div>{showItems()}</div>;
};

export default SideNavItems;
