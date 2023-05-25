import { IStoreResponse } from "@/types/fetch.interface";

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  store: string;
}

export interface IStore extends IStoreResponse {
  products?: IProduct[];
}

export interface IState {
  error: string | null | undefined;
  isLoading: boolean;
  store: IStore[];
  cart: IProduct[];
}
