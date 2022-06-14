import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="header__left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
          {/* link  Router*/}
          {/* link Router */}
        </div>
        <div className="header__right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar/>
          {/* icon Material UI */}
          {/* Avatar Material UI */}
        </div>
      </div>
      <div className="home__body"></div>
    </div>
  );
};

export default Home;
