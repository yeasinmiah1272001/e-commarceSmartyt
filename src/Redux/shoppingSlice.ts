import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../../type";

// Define the initial state type
interface ShoppingState {
  productData: Products[];
  userInfo: null | any;
  orderData: any[];
}

const initialState: ShoppingState = {
  productData: [],
  userInfo: null,
  orderData: [],
};

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addTocart: (state, action: PayloadAction<Products>) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },

    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      existingProduct && existingProduct.quantity++;
    },

    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );

      if (existingProduct?.quantity === 1) {
        existingProduct.quantity === 1;
      } else {
        existingProduct && existingProduct.quantity--;
      }
    },

    deleteProduct: (state, action) => {
      console.log("state", action);

      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },

    resetData: (state) => {
      state.productData = [];
    },

    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    deleteUser: (state) => {
      state.userInfo = null;
    },


    addOrder: (state, action) => {
      const existingOrder = state.orderData.find(
        (item) => item._id === action.payload._id
      );
      if (existingOrder) {
        state.orderData.push(action.payload);
      } else {
        state.orderData = action.payload;
      }
    },

    resetOrder: (state) => {
      state.orderData = [];
    },



  },
});

export const {
  addTocart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetData,
  addUser,
  deleteUser,
  addOrder,
  resetOrder

} = shoppingSlice.actions;

export default shoppingSlice.reducer;
