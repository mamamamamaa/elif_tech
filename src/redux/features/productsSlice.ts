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
  userOrderData: { name: "", address: "", email: "", phone: "" },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setInCart(
      state,
      action: PayloadAction<{ store: string; product: string }>
    ) {
      const { store, product } = action.payload;

      const searchedStore = state.stores.find(({ _id }) => _id === store);
      const searchedProduct = searchedStore?.products?.find(
        ({ _id }) => _id === product
      );

      if (searchedProduct) {
        if (searchedProduct.store === state.cart[0].store) {
          state.cart.push(searchedProduct);
        } else {
          state.error =
            "You can only add products from one store to your shopping cart";
        }
      } else {
        state.error = "Product not found";
      }
    },

    removeFromCart(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter(({ _id }) => _id !== action.payload);
    },
  },
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
          state.isLoading = false;

          if (action.payload.length === 0) {
            state.activeStoreProducts = null;
            return;
          }

          const { store: storeId = null } = action.payload[0];
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

export const { setInCart, removeFromCart } = productsSlice.actions;

export default productsSlice.reducer;
