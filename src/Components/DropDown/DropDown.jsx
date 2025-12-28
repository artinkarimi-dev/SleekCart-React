import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import "./DropDown.css";

const DropdownMenuDemo = ({ onLike, product, Cart }) => {
  // Handle the like button click inside the dropdown
  const clickLike = () => {
    onLike(product);
  };

  // Handle adding the product to the cart
  const CartProduct = () => {
    Cart(product.id);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="DropdownMenuItem" onClick={clickLike}>
            افزودن به علاقه‌مندی‌ها
          </DropdownMenu.Item>

          <DropdownMenu.Item className="DropdownMenuItem" onClick={CartProduct}>
            افزودن به سبد خرید
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;
