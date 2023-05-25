import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState, IStore } from "@/types/store.intarface";
import { getShops } from "@/redux/operations/products";

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
      .addCase(getShops.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getShops.fulfilled, (state, action: PayloadAction<IStore[]>) => {
        state.isLoading = false;
        state.store = action.payload;
      }),
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
