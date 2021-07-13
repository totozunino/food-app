import React from "react";
import Header from "./components/Header/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import MealsList from "./components/Meals/MealsList";

const App: React.FC = () => (
  <div className="App">
    <Header />
    <MealsSummary />
    <MealsList />
  </div>
);

export default App;
