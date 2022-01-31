import { createContext, useContext, useEffect } from "react";

import React, { useState } from "react";
const MealContext = createContext();
const fetchFavList = () => {
  let list = localStorage.getItem("list");

  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
const MealProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [favouriteList, setFavouriteList] = useState(fetchFavList());

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(favouriteList));
  }, [favouriteList]);

  return (
    <MealContext.Provider
      value={{
        meals,
        setMeals,
        loading,
        setLoading,
        search,
        setSearch,
        setMeals,
        favouriteList,
        setFavouriteList,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};
export const MealState = () => {
  return useContext(MealContext);
};

export default MealProvider;
