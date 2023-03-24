import { useFavContext } from "../contexts/favContext";
import "./FavoritesResto.css";
import "../App.css";
import { CardRestaurant } from "./CardRestaurant";

export const Favorites = () => {
  const { favorites } = useFavContext();
  return (
    <div className="contanerResto">
      <div className="restoGrid">
        {favorites.map((restaurant) => (
          <div key={restaurant.id}>
            <CardRestaurant restaurant={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
};
