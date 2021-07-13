import React from "react";
import classes from "./MealsListItem.module.css";
import { Meal } from "../../types/meal";

type MealsListItemProps = {
  meal: Meal;
};

const MealsListItem: React.FC<MealsListItemProps> = ({ meal }) => (
  <li className={classes["meals-list-item"]}>
    <img src={meal.thumb} alt="Meal Thumbnail" />
    <div className={classes.content}>
      <h2>{meal.name}</h2>
      <h3 className={classes.price}>${meal.price}</h3>
    </div>
  </li>
);

export default MealsListItem;
