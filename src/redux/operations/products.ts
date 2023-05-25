import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IStoreResponse } from "../../types/fetch.interface";

const { VITE_SERVER } = import.meta.env;

console.log(VITE_SERVER);

axios.defaults.baseURL = VITE_SERVER;

export const getStores = createAsyncThunk<
  IStoreResponse[],
  any,
  { rejectValue: string }
>("products/stores", async (_, thunkApi) => {
  try {
    const { data } = await axios.get("/api/store");

    return data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return thunkApi.rejectWithValue(err.message);
    }

    return err;
  }
});
