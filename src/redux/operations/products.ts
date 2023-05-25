import getConfig from "next/config";
import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const { publicRuntimeConfig } = getConfig();

const { SERVER } = publicRuntimeConfig;

axios.defaults.baseURL = SERVER;

export const getShops = createAsyncThunk(
  "products/shops",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/api/store");

      return data;
    } catch (err) {
      if (err instanceof AxiosError) {
        return thunkApi.rejectWithValue(err.message);
      }
    }
  }
);
