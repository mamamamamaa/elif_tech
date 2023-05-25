export interface IProduct {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  store: string;
}

export interface IStore {
  _id: string;
  name: string;
  address: string;
  products: IProduct[];
}

export interface IState {
  error: string | null;
  isLoading: boolean;
  store: IStore[];
  cart: IProduct[];
}
