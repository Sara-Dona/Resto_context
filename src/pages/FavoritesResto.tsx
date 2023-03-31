import { useFavContext } from "../contexts/favContext";
import "./FavoritesResto.css";
import "../App.css";
import { CardRestaurant } from "../components/CardRestaurant";
import { useContext } from "react";
import { RestaurantsContext } from "../contexts/RestaurantsContext";

export const Favorites = () => {
  const { restaurants } = useContext(RestaurantsContext);
  const { favorites } = useFavContext();

  const favoriteRestaurants = restaurants.filter((restaurants) =>
    favorites.includes(restaurants.id)
  );

  return (
    <div className="contanerResto">
      <div className="restoGrid">
        {favoriteRestaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <CardRestaurant restaurant={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
};
