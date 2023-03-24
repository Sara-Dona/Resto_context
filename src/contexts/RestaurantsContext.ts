import React from "react";
import { createContext } from "react";
import { RestaurantsType } from "../models/Restaurants";

type RestaurantsContextType = {
  restaurants: RestaurantsType[];
};

export const RestaurantsContext = createContext<RestaurantsContextType>({
  restaurants: [],
});
