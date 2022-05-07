import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "./reducers/cartItemReducer";

const store = configureStore({ reducer: { cartItemReducer } });

export default store;
