import React from "react";
import { useLoaderData } from "react-router-dom";

const CountryDtl = () => {
  const countryDTL = useLoaderData();
  console.log(countryDTL[0]);
  const { name, population, flags } = countryDTL[0];
  return (
    <div className="container mx-auto text-xl font-semibold">
      <img
        className="w-2/5 mx-auto mt-32 rounded-lg shadow-xl"
        src={flags.png}
        alt=""
      />
      <h2>{name.official}</h2>
      <p>Population : {population}</p>
    </div>
  );
};

export default CountryDtl;
