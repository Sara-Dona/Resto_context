import React from "react";
import { restaurants } from "./data/data";
import "./App.css";
import { RestaurantsContext } from "./contexts/RestaurantsContext";
import { RestorantsList } from "./composants/RestorantsList";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { RestoDetail } from "./composants/RestoDetails";
import { Favorites } from "./composants/FavoritesResto";
import { FavContextProvider } from "./contexts/favContext";
import { Header } from "./composants/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RestaurantsContext.Provider value={{ restaurants }}>
          <FavContextProvider>
            <Routes>
              <Route path="/" element={<RestorantsList />} />
              <Route path="details/:id" element={<RestoDetail />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </FavContextProvider>
        </RestaurantsContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
