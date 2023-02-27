import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iCartItem, iProduct } from "@/Types/common-types";
import { RootState } from "../store";

interface iInitialState {
  items: iCartItem[];
  totalPrice: number;
  titleOfCategory:string;
}

const initialState: iInitialState = {
  totalPrice: 0, // общая цена
  items: [], // массив всех товаров в корзине
  titleOfCategory: '',
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

    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((i) => i.product.id !== action.payload);
      state.totalPrice;
    },
    addOneMore: (state, action: PayloadAction<{ id: string }>) => {
      const current = state.items.find(
        (obj) => obj.product.id === action.payload.id
      );
      if (current) current.quantity++

    },
    deleteOne: (state, action: PayloadAction<{ id: string }>) => {
      const current = state.items.find(
        (obj) => obj.product.id === action.payload.id
      );
      if (current) current.quantity--
    },
    setTitleofCategory: (state, action:PayloadAction<string>) => {
      state.titleOfCategory = action.payload
    }
  },
});

export const {
  addProductIntoCart,
  removeProductFromCart,
  addOneMore,
  deleteOne,
  setTitleofCategory
} = cartAddProductSlice.actions; // импортируем экшены

export const selectItems = (state: RootState) => state.cart; // получить данные стора

export default cartAddProductSlice.reducer; // импортируем сам слайсер
