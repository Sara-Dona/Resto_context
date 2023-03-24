import { RestaurantsType } from "../models/Restaurants";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import "../App.css";
import { useFavContext } from "../contexts/favContext";
import "./CardResto.css";
import { useState } from "react";
import { ModalConfirmation } from "./Modal";

type CardRestaurantProps = {
  restaurant: RestaurantsType;
};

export const CardRestaurant = ({ restaurant }: CardRestaurantProps) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavContext();
  const [showModal, setShowModal] = useState(false);
  const [restaurantToDelete, setRestaurantToDelete] =
    useState<RestaurantsType | null>(null);

  const checkFavorites = (id: number) => {
    const boolean = favorites.some((restaurant) => restaurant.id === id);
    return boolean;
  };
  const handleDelete = () => {
    if (restaurantToDelete) {
      //funcion para verificar que restaurantToDelete no es nulo(si es nulo no tiene id). y removeFromFavorites se ejecutara solo si se verifica que no es nulo.
      removeFromFavorites(restaurantToDelete.id);
      setRestaurantToDelete(null);
      setShowModal(false);
    }
  };

  return (
    <div className="CardResto">
      <img src={restaurant.img} alt="img-resto" />
      <div>
        {checkFavorites(restaurant.id) ? (
          <p
            onClick={() => {
              setRestaurantToDelete(restaurant);
              setShowModal(true);
            }}
            className="heart"
          >
            <FaRegHeart color="red" />
          </p>
        ) : (
          <p onClick={() => addToFavorites(restaurant)} className="heart">
            <FaRegHeart />
          </p>
        )}
      </div>
      <ModalConfirmation
        show={showModal}
        handleClose={() => setShowModal(false)}
        onDelete={handleDelete}
      />
      <Link to={`/details/${restaurant.id}`}>
        <h2 className="titleResto">{restaurant.name}</h2>
      </Link>
      <p className="descriptionResto">{restaurant.description_short}</p>
    </div>
  );
};
