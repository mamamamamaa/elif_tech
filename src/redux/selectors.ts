import { RootState } from "./store";

export const selectIsLoading = (state: RootState) => state.products.isLoading;

export const selectError = (state: RootState) => state.products.error;

export const selectStores = (state: RootState) => state.products.stores;

export const selectActiveProducts = (state: RootState) =>
  state.products.activeStoreProducts;

export const selectCart = (state: RootState) => state.products.cart;
