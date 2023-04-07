import { useContext, useState } from "react";
import { RestaurantsContext } from "../contexts/RestaurantsContext";
import { useParams } from "react-router-dom";
import "./RestoDetails.css";
import { useFavContext } from "../contexts/favContext";
import { ModalConfirmation } from "../components/Modal";
import { RestaurantsType } from "../models/Restaurants";

export const RestoDetail = () => {
  const { restaurants } = useContext(RestaurantsContext);

  const { id } = useParams();
  const restaurant = restaurants.filter(
    (restaurants) => restaurants.id === Number(id)
  );

  const { addToFavorites, removeFromFavorites, favorites } = useFavContext();
  const [showModal, setShowModal] = useState(false);
  const [restaurantToDelete, setRestaurantToDelete] =
    useState<RestaurantsType | null>(null);

  if (id == null) return null;

  const handleDelete = () => {
    if (restaurantToDelete) {
      removeFromFavorites(restaurantToDelete.id);
      setRestaurantToDelete(null);
      setShowModal(false);
    }
  };

  const checkFavorites = (id: string) => {
    return favorites.some((restaurant) => restaurant === parseInt(id));
  };

  return (
    <div className="container-details">
      {checkFavorites(id) ? (
        <button
          className="btn-add"
          onClick={() => {
            setRestaurantToDelete(
              restaurants.find((resto) => resto.id === parseInt(id)) || null
            );
            setShowModal(true);
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
          <p>Entrées</p>
          {restaurant.menu.entrees.map((entrees) => (
            <div key={entrees} className="description-resto">
              {entrees}
            </div>
          ))}
          <p>Plats</p>

          {restaurant.menu.dishes.map((dish) => (
            <div key={dish} className="description-resto">
              {dish}
            </div>
          ))}

          <p>Desserts</p>
          {restaurant.menu.deserts.map((desert) => (
            <div key={desert} className="description-resto">
              {desert}
            </div>
          ))}
          {/* {restaurant.map((desserts)=>)} */}
          {/* <div className="description-resto">{restaurant.menu.entrees[0]}</div>
          <div className="description-resto">{restaurant.menu.entrees[1]}</div>
          <p>Plats</p>
          <div className="description-resto">{restaurant.menu.dishes[0]}</div>
          <div className="description-resto">{restaurant.menu.dishes[1]}</div>
          <div className="description-resto">{restaurant.menu.dishes[2]}</div>
          <p>Desserts</p>
          <div className="description-resto">{restaurant.menu.deserts[0]}</div>
          <div className="description-resto">{restaurant.menu.deserts[1]}</div> */}
        </div>
      ))}
      <ModalConfirmation
        show={showModal}
        handleClose={() => setShowModal(false)}
        onDelete={handleDelete}
      />
    </div>
  );
};
