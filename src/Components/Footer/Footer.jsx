import React, { useState } from "react";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { MdMapsHomeWork, MdDelete } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

function Footer({
  favorites,
  onRemoveFavorite,
  addToCart,
  onRemoveFromCart,
  onClearCart,
  onClearFavorites,
}) {
  const [openBox, setOpenBox] = useState(null);

  // Template for the Shopping Cart popup
  const CartBox = (
    <div
      onMouseEnter={() => setOpenBox("cart")}
      onMouseLeave={() => setOpenBox(null)}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-[420px] bg-gray-950 rounded-xl shadow-2xl flex flex-col z-50"
    >
      <p className="text-white font-bold text-sm text-right px-4 py-3 border-b border-gray-800">
        سبد خرید ({addToCart.length})
      </p>

      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-3">
        {addToCart.map((item) => (
          <div
            key={item.id}
            dir="rtl"
            className="flex gap-3 bg-gray-900/40 rounded-lg p-3 h-24"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-full object-cover rounded-md flex-shrink-0"
            />
            <div className="flex flex-col justify-between w-full overflow-hidden">
              <h1 className="text-sm text-white font-bold truncate">
                {item.title}
              </h1>
              <p className="text-[11px] text-gray-300 line-clamp-2">
                {item.description}
              </p>
              <div className="flex justify-between items-center text-white">
                <p className="text-sm">ت {item.price.toLocaleString()}</p>
                <MdDelete
                  onClick={() => onRemoveFromCart(item.id)}
                  className="text-red-500 cursor-pointer text-lg hover:text-red-600 transition"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show total price and clear button if cart is not empty */}
      {addToCart.length > 0 && (
        <div className="px-4 py-3 border-t border-gray-800 flex justify-between items-center text-sm text-white">
          <span>
            مبلغ کل:
            <span className="text-green-500 font-bold">
              {addToCart
                .reduce((a, b) => a + Number(b.price), 0)
                .toLocaleString()}
              ت
            </span>
          </span>
          <div
            onClick={onClearCart}
            className="cursor-pointer px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 transition"
          >
            پاکسازی کل
          </div>
        </div>
      )}
    </div>
  );

  // Template for the Favorites popup
  const HeartBox = (
    <div
      onMouseEnter={() => setOpenBox("heart")}
      onMouseLeave={() => setOpenBox(null)}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-[420px] bg-gray-950 rounded-xl shadow-2xl flex flex-col z-50"
    >
      <p className="text-white font-bold text-sm text-right px-4 py-3 border-b border-gray-800">
        علاقه مندی ها ({favorites.length})
      </p>

      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-3">
        {favorites.map((item) => (
          <div
            key={item.id}
            dir="rtl"
            className="flex gap-3 bg-gray-900/40 rounded-lg p-3 h-24"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-full object-cover rounded-md flex-shrink-0"
            />
            <div className="flex flex-col justify-between w-full overflow-hidden">
              <h1 className="text-sm text-white font-bold truncate">
                {item.title}
              </h1>
              <p className="text-[11px] text-gray-300 line-clamp-2">
                {item.description}
              </p>
              <div className="flex justify-between items-center text-white">
                <p className="text-sm">ت {item.price.toLocaleString()}</p>
                <MdDelete
                  onClick={() => onRemoveFavorite(item.id)}
                  className="text-red-500 cursor-pointer text-lg hover:text-red-600 transition"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {favorites.length > 0 && (
        <div className="px-4 py-3 border-t border-gray-800 flex justify-between items-center text-sm text-white">
          <span>
            مبلغ کل:
            <span className="text-green-500 font-bold">
              {favorites
                .reduce((a, b) => a + Number(b.price), 0)
                .toLocaleString()}
              ت
            </span>
          </span>
          <div
            onClick={onClearFavorites}
            className="cursor-pointer px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 transition"
          >
            پاکسازی کل
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="border-2 border-blue-800 shadow-[0_10px_30px_15px_rgba(59,130,246,0.5)] shadow-blue-800 w-full flex items-center justify-center p-7 rounded-lg relative">
      <ul className="flex items-center gap-14">
        {openBox === "cart" && CartBox}
        {openBox === "heart" && HeartBox}

        <li className="cursor-pointer">
          <FaCartShopping
            onMouseEnter={() => setOpenBox("cart")}
            className="text-2xl hover:text-red-300"
          />
        </li>
        <li className="cursor-pointer">
          <FaHeart
            onMouseEnter={() => setOpenBox("heart")}
            className="text-2xl hover:text-red-300"
          />
        </li>
        <li>
          <MdMapsHomeWork className="text-2xl hover:text-red-300" />
        </li>
        <li>
          <FaBook className="text-2xl hover:text-red-300" />
        </li>
        <li>
          <IoLogoYoutube className="text-3xl text-red-500 hover:text-red-300" />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
