import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const meal = useLoaderData();

  const { categories } = meal;
  return (
    <div className="container mx-auto my-12">
      <h1 className="mb-12 text-5xl font-semibold">Thear so may meal</h1>
      <div className="grid grid-cols-3 gap-10">
        {categories.map((oneMeal) => (
          <LoadeMeal key={oneMeal.idCategory} oneMeal={oneMeal}></LoadeMeal>
        ))}
      </div>
    </div>
  );
};

const LoadeMeal = ({ oneMeal }) => {
  const { strCategory, strCategoryDescription, strCategoryThumb } = oneMeal;
  return (
    <div className="rounded-lg shadow-xl bg-green-200">
      <img className="rounded-lg" src={strCategoryThumb} alt="" />
      <h1 className="text-3xl font-semibold text-orange-600">{strCategory}</h1>
      <p className="p-4 text-justify text-gray-500">
        {strCategoryDescription.lenght <= 200
          ? strCategoryDescription
          : strCategoryDescription.slice(0, 200)}
      </p>
      <button className="bg-orange-500 px-10 py-1 text-xl font-semibold text-white rounded-lg my-5">
        <Link to={`/home/${strCategory}`}>Buy Now</Link>
      </button>
    </div>
  );
};

export default Home;
