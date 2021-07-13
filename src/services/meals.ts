export type RawMeal = {
  meals: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  }[];
};

export async function getMeals(): Promise<RawMeal> {
  const response: Response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
  const data: RawMeal = await response.json();
  return data;
}
