import getConfig from "next/config";
import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IStoreResponse } from "@/types/fetch.interface";

const { publicRuntimeConfig } = getConfig();

const { SERVER } = publicRuntimeConfig;

axios.defaults.baseURL = SERVER;

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
