import Header from "./Components/Header/Header";
import Shop from "./Components/shop/shop";
import Data from "../data/products";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";

function App() {
  const [data] = useState(Data);
  const [favorites, setFavorites] = useState([]);
  const [addToCart, setAddToCard] = useState([]);

  // Add a product to the favorites list if it's not already there
  const addToFavorites = (product) => {
    setFavorites((prev) => {
      if (!prev.find((item) => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  // Remove a specific product from favorites using its ID
  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  // Remove a specific product from the shopping cart
  const removeFromCart = (id) => {
    setAddToCard((prev) => prev.filter((item) => item.id !== id));
  };

  // Functions to empty the lists
  const clearCart = () => setAddToCard([]);
  const clearFavorites = () => setFavorites([]);

  // Find product by ID from data and add it to the cart state
  const addProduct = (id) => {
    const mainProduct = Data.find((product) => product.id === id);

    if (mainProduct) {
      setAddToCard((prevCart) => [...prevCart, mainProduct]);
    }
  };

  return (
    <>
      <div className="max-w-4/5 mx-auto mb-7">
        <Header />
        <div className="flex flex-row flex-wrap mt-10">
          {/* Loop through data to display each product in the Shop component */}
          {data.map((item) => (
            <Shop
              key={item.id}
              {...item}
              onLike={addToFavorites}
              Cart={addProduct}
            />
          ))}
        </div>
      </div>

      <div className="index-999">
        <Footer
          addToCart={addToCart}
          favorites={favorites}
          onRemoveFavorite={removeFromFavorites}
          onRemoveFromCart={removeFromCart}
          onClearCart={clearCart}
          onClearFavorites={clearFavorites}
        />
      </div>
    </>
  );
}

export default App;
