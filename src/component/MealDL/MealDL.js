import React from "react";
import { useLoaderData } from "react-router-dom";

const MealDL = () => {
  const detales = useLoaderData();
  const { meals } = detales;

  return (
    <div className="grid grid-cols-3 gap-10 container mx-auto my-12">
      {meals === null ? (
        <h1 className="text-7xl font-semibold text-orange-600">on data</h1>
      ) : (
        meals.map((detale) => (
          <Detail key={detale.idMeal} detale={detale}></Detail>
        ))
      )}
    </div>
  );
};

const Detail = ({ detale }) => {
  const { strMeal, strMealThumb } = detale;
  return (
    <div className="rounded-lg shadow-xl bg-green-200">
      <img className="rounded-lg" src={strMealThumb} alt="" />
      <h1 className="text-3xl font-semibold text-orange-600">{strMeal}</h1>
    </div>
  );
};

export default MealDL;
