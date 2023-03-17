import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { addProductIntoCart } from "@/store/slicers/cartSlicer";
import React from "react";
import { TiPlus } from "react-icons/ti";

const ButtonAddToCart = ({ card }) => {
  const dispatch = useAppDispatch();
  return (
    <button title="Добавить в корзину"
      className="px-2 py-2 pr-3 flex items-center bg-[#00800060] rounded-md hover:text-[#fff] hover:bg-[green] group transition-all"
      onClick={() => dispatch(addProductIntoCart(card))}
    >
      <TiPlus className="text-[green] group-hover:text-[red] transition-all" />
      Добавить
    </button>
  );
};

export default ButtonAddToCart;
