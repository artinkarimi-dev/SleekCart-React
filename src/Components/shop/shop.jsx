import React from "react";
import DropDown from "../DropDown/DropDown";

export default function Shop({
  Cart,
  id,
  title,
  description,
  price,
  img,
  onLike,
}) {
  // Create a product object to pass easily to other components
  const product = { id, title, description, price, img };

  return (
    <div className="transition-all duration-300 ease-in-out w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
      <div className="transition-all duration-300 ease-in-out hover:shadow-2xl/30 shadow-white rounded-xl overflow-hidden flex flex-col h-full bg-[#0f172a]">
        <img
          className="object-cover w-full h-48 sm:h-56 md:h-64"
          src={img}
          alt={title}
        />
        <div className="p-5 flex flex-col">
          <h1 className="text-sm sm:text-base font-sans text-center pt-5 font-bold text-white">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 font-sans text-center py-4 px-2 sm:px-4">
            {description}
          </p>
          <div
            dir="rtl"
            className="px-3 sm:px-5 py-4 flex flex-row justify-between items-center"
          >
            {/* Display price with local currency formatting */}
            <p className="text-white font-semibold">{price.toLocaleString()}</p>
            <div>
              <DropDown
                addProduct={product}
                product={product}
                onLike={onLike}
                Cart={Cart}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
