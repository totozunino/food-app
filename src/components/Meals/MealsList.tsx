import React, { useEffect, useState } from "react";
import MealListItem from "./MealsListItem";
import Card from "../UI/Card";
import classes from "./MealsList.module.css";
import { getMeals, RawMeal } from "../../services/meals";
import Spinner from "../UI/Spinner";
import { Meal } from "../../types/meal";

const MealsList: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMeals()
      .then((data: RawMeal) => {
        const mealsList: Meal[] = data.meals.map((meal) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          thumb: meal.strMealThumb,
          price: 100,
        }));
        setMeals(mealsList);
      })
      .finally(() => {
        setIsLoading((prevState) => !prevState);
      });
  }, []);

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <Spinner />}
        {!isLoading && (
          <ul>
            {meals.map((meal) => (
              <MealListItem key={meal.id} meal={meal} />
            ))}
          </ul>
        )}
      </Card>
    </section>
  );
};

export default MealsList;
