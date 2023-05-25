import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IStoreResponse } from "../../types/fetch.interface";
import { IProduct } from "../../types/store.intarface.ts";
import { RootState } from "../store.ts";

const { VITE_SERVER } = import.meta.env;

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

export const getStoreProducts = createAsyncThunk<
  IProduct[],
  string,
  { rejectValue: string }
>("products/products", async (id: string, thunkApi) => {
  try {
    const { data } = await axios.get(`/api/store/${id}/products`);

    return data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return thunkApi.rejectWithValue(err.message);
    }

    return err;
  }
});

export const makeOrder = createAsyncThunk<any, any, { rejectValue: string }>(
  "products/make-order",
  async (_, thunkApi) => {
    const store = thunkApi.getState() as RootState;
    const { userOrderData, cart, totalPrice } = store.products;

    const productsToOrder = cart.map(({ _id, store, takenQuantity }) => ({
      takenQuantity,
      product: _id,
      store,
    }));

    const reqData = {
      ...userOrderData,
      totalPrice,
      store: productsToOrder[0].store,
      products: productsToOrder,
    };

    try {
      await axios.post(`/api/order`, reqData);
      return;
    } catch (err) {
      if (err instanceof AxiosError) {
        return thunkApi.rejectWithValue(err.message);
      }

      return err;
    }
  }
);
