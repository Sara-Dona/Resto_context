import React, { useContext, createContext, useEffect } from "react";
import { useState } from "react";
import { RestaurantsType } from "../models/Restaurants";

type favContextProviderProps = {
  children: JSX.Element | JSX.Element[];
};
type favContextProvide = {
  favorites: number[];
  addToFavorites: (restaurants: RestaurantsType) => void;
  removeFromFavorites: (id: number) => void;
};

const FavContext = createContext({} as favContextProvide);

export const useFavContext = () => {
  const context = useContext(FavContext);
  return context;
};

const getInitialState = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

export const FavContextProvider = ({ children }: favContextProviderProps) => {
  const [favorites, setFavorites] = useState<number[]>(getInitialState);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (restaurants: RestaurantsType) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.concat(restaurants.id);
    setFavorites(newFavorites);
  };

  const removeFromFavorites = (id: number) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.filter(
      (restaurants) => restaurants !== id
    );
    setFavorites(newFavorites);
  };

  return (
    <FavContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavContext.Provider>
  );
};
