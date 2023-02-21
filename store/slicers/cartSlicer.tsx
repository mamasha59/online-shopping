import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iCartItem, iProduct } from "@/Types/common-types";
import { RootState } from "../store";

interface iInitialState {
  items: iCartItem[];
  totalPrice: number;
}
const initialState: iInitialState = {
  // первоначальное состояние карзины это пустой массив
  totalPrice: 0, // общая цена
  items: [], // массив всех товаров в корзине
};

const cartAddProductSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductIntoCart: (state, action: PayloadAction<iProduct>) => {
      const itemExist = state.items.find(
        (obj) => obj.product.id === action.payload.id
      );
      if (itemExist) {
        itemExist.quantity++;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }
    },

    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.product.id !== action.payload);
      state.totalPrice;
    },
    addOneMore: (state, action: PayloadAction<{ id: number }>) => {
      const current = state.items.find(
        (obj) => obj.product.id === action.payload.id
      );
      if (current) current.quantity++;
    },
    deleteOne: (state, action: PayloadAction<{ id: number }>) => {
      const current = state.items.find(
        (obj) => obj.product.id === action.payload.id
      );
      if (current) current.quantity--;
    },
  },
});

export const {
  addProductIntoCart,
  removeProductFromCart,
  addOneMore,
  deleteOne,
} = cartAddProductSlice.actions; // импортируем экшены

export const selectItems = (state: RootState) => state.cart; // получить данные стора

export default cartAddProductSlice.reducer; // импортируем сам слайсер
