import react, { useContext } from "react";
import { RestaurantsContext } from "../contexts/RestaurantsContext";
import { useParams } from "react-router-dom";
import "./RestoDetails.css";
import { useFavContext } from "../contexts/favContext";

export const RestoDetail = () => {
  const { restaurants } = useContext(RestaurantsContext);

  const { id } = useParams();
  const restaurant = restaurants.filter(
    (restaurants) => restaurants.id === Number(id)
  );

  const { favorites, addToFavorites, removeFromFavorites } = useFavContext();

  const checkFavorites = (id: string | undefined) => {
    if (!id) {
      return false;
    }
    const boolean = favorites.some(
      (restaurant) => restaurant.id === parseInt(id)
    );
    return boolean;
  };
  return (
    <div className="container-details">
      {checkFavorites(id) ? (
        <button
          className="btn-add"
          onClick={() => {
            if (id) {
              removeFromFavorites(parseInt(id));
            }
          }}
        >
          Remove From Favorites
        </button>
      ) : (
        <button
          className="btn-add"
          onClick={() => addToFavorites(restaurant[0])}
        >
          Add to Favorites
        </button>
      )}
      {restaurant.map((restaurant) => (
        <div key={restaurant.id} className="details">
          <h1>{restaurant.name}</h1>
          <div className="details-resto">{restaurant.description_long}</div>
          <h1>Menu </h1>
          <p>entrées</p>
          <div className="description-resto">{restaurant.menu.entrees[0]}</div>
          <div className="description-resto">{restaurant.menu.entrees[1]}</div>
          <p>Plats</p>
          <div className="description-resto">{restaurant.menu.dishes[0]}</div>
          <div className="description-resto">{restaurant.menu.dishes[1]}</div>
          <div className="description-resto">{restaurant.menu.dishes[2]}</div>
          <p>Desserts</p>
          <div className="description-resto">{restaurant.menu.deserts[0]}</div>
          <div className="description-resto">{restaurant.menu.deserts[1]}</div>
        </div>
      ))}
    </div>
  );
};
