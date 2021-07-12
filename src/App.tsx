import React from "react";
import Header from "./components/Header/Header";
import MealsSummary from "./components/Meals/MealsSummary";

const App: React.FC = () => (
  <div className="App">
    <Header />
    <MealsSummary />
  </div>
);

export default App;
