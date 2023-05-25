import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "../../types/store.intarface";
import { getStores } from "../operations/products";
import { IStoreResponse } from "../../types/fetch.interface";

const initialState: IState = {
  error: null,
  isLoading: false,
  store: [],
  cart: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getStores.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getStores.fulfilled,
        (state, action: PayloadAction<IStoreResponse[]>) => {
          state.isLoading = false;
          state.store = action.payload;
        }
      )
      .addCase(getStores.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
