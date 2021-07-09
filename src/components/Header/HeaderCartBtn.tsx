import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartBtn.module.css";

const HeaderCartBtn: React.FC = () => (
  <button type="button" className={classes.button}>
    <span className={classes.icon}>
      <CartIcon />
    </span>
    <span className={classes["cart-text"]}>Your Cart</span>
    <span className={classes.badge}>4</span>
  </button>
);

export default HeaderCartBtn;
