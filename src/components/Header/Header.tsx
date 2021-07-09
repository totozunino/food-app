import React from "react";
import classes from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartBtn from "./HeaderCartBtn";

const Header: React.FC = () => (
  <>
    <header className={classes.header}>
      <h1>Food App</h1>
      <HeaderCartBtn />
    </header>
    <div className={classes["main-image"]}>
      <img src={mealsImg} alt="Our food menu" />
    </div>
  </>
);

export default Header;
