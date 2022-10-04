import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import CountryDtl from "./component/CountryDtl/CountryDtl";
import Home from "./component/Home/Home";
import Main from "./component/Main/Main";
import MealDL from "./component/MealDL/MealDL";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "home",
          loader: async () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/categories.php"
            );
          },
          element: <Home></Home>,
        },
        {
          path: "home/:name",
          loader: async ({ params }) => {
            return fetch(
              `https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.name}`
            );
          },
          element: <MealDL></MealDL>,
        },
        {
          path: "about",
          loader: async () => {
            return fetch("https://restcountries.com/v3.1/all");
          },
          element: <About></About>,
        },
        {
          path: "about/:name",
          loader: async ({ params }) => {
            return fetch(`https://restcountries.com/v3.1/name/${params.name}`);
          },
          element: <CountryDtl></CountryDtl>,
        },
        { path: "product", element: <div>this my Product page</div> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
