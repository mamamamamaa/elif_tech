import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, IState } from "../../types/store.intarface";
import { getStoreProducts, getStores } from "../operations/products";
import { IStoreResponse } from "../../types/fetch.interface";

const initialState: IState = {
  error: null,
  isLoading: false,
  stores: [],
  cart: [],
  activeStoreProducts: null,
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
          state.stores = action.payload;
        }
      )
      .addCase(getStores.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getStoreProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getStoreProducts.fulfilled,
        (state, action: PayloadAction<IProduct[]>) => {
          const { store: storeId } = action.payload[0];

          state.isLoading = false;
          state.stores = state.stores.map((store) => {
            if (store._id === storeId) {
              store.products = action.payload;
            }

            return store;
          });
          state.activeStoreProducts = action.payload;
        }
      )
      .addCase(getStoreProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
