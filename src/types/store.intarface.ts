import { IStoreResponse } from "./fetch.interface";

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  store: string;
  takenQuantity?: number;
}

export interface IStore extends IStoreResponse {
  products?: IProduct[];
}

export interface IOrderData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface IState {
  error: string | null | undefined;
  isLoading: boolean;
  stores: IStore[];
  cart: IProduct[];
  activeStoreProducts: IProduct[] | null;
  userOrderData: IOrderData;
}
