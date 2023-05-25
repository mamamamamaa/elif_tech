import { RootState } from "./store";

export const selectIsLoading = (state: RootState) => state.products.isLoading;
export const selectError = (state: RootState) => state.products.error;
export const selectStore = (state: RootState) => state.products.store;
export const selectCart = (state: RootState) => state.products.cart;
