import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: string | null;
}

const initialState: CounterState = {
  value: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setHello(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },

  extraReducers: (builder) => builder,
});

export const { setHello } = productsSlice.actions;

export default productsSlice.reducer;
