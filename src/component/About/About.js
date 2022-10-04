import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const About = () => {
  const countries = useLoaderData();
  console.log(countries);
  return (
    <div className="container mx-auto">
      <h1>All Country</h1>
      <div className="grid grid-cols-3 gap-10">
        {countries.map((country) => (
          <LoadCountry key={country.cca3} country={country}></LoadCountry>
        ))}
      </div>
    </div>
  );
};

const LoadCountry = ({ country }) => {
  const { name, flags, subregion } = country;
  return (
    <div className="rounded-lg shadow-xl bg-green-200">
      <img className="rounded-lg w-full h-52" src={flags.png} alt="" />
      <h1 className="text-3xl font-semibold text-orange-600">{name.common}</h1>
      <p className="p-4 text-justify text-gray-500">{subregion}</p>
      <button className="bg-orange-500 px-10 py-1 text-xl font-semibold text-white rounded-lg my-5">
        <Link to={`/about/${name.common}`}>See Details</Link>
      </button>
    </div>
  );
};

export default About;
