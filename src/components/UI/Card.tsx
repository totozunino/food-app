import React from "react";
import classes from "./Card.module.css";

const Card: React.FC = ({ children }) => <div className={classes.card}>{children}</div>;

export default Card;
