import React, { useContext } from "react";
import { RestaurantsContext } from "../contexts/RestaurantsContext";
import { CardRestaurant } from "./CardRestaurant";
import "../composants/RestorantsList.css";
import "../App.css";

export const RestorantsList = () => {
  const { restaurants } = useContext(RestaurantsContext);

  return (
    <div className="contanerResto">
      <div className="restoGrid">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <CardRestaurant restaurant={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
};
