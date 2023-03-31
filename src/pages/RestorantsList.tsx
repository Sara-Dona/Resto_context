import React, { useContext } from "react";
import { RestaurantsContext } from "../contexts/RestaurantsContext";
import { CardRestaurant } from "../components/CardRestaurant";
import "./RestorantsList.css";
import "../App.css";

export const RestorantsList = () => {
  const { restaurants } = useContext(RestaurantsContext);

  return (
    <div className="contanerResto">
      <div className="restoGrid">
        {restaurants.map((restaurant) => (
          <CardRestaurant key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
