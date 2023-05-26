import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import {
  IOrderData,
  IOrderHistory,
  IProduct,
  IState,
} from "../../types/store.intarface";
import {
  getOrderHistory,
  getStoreProducts,
  getStores,
  makeOrder,
} from "../operations/products";
import { IStoreResponse } from "../../types/fetch.interface";

const initialState: IState = {
  error: null,
  isLoading: false,
  stores: [],
  cart: [],
  activeStoreProducts: null,
  userOrderData: { name: "", address: "", email: "", phone: "" },
  totalPrice: 0,
  orderHistory: [],
  currentStore: null,
};

const extraActions = [getOrderHistory, getStoreProducts, getStores, makeOrder];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentStore(store, action: PayloadAction<string>) {
      store.currentStore = action.payload;
    },
    setInCart(
      state,
      action: PayloadAction<{ store: string; product: string }>
    ) {
      const { store, product } = action.payload;

      const searchedStore = state.stores.find(({ _id }) => _id === store);
      const searchedProduct = searchedStore?.products?.find(
        ({ _id }) => _id === product
      );

      if (searchedProduct) {
        if (
          !state.cart[0]?.store ||
          searchedProduct.store === state.cart[0].store
        ) {
          searchedProduct.takenQuantity = 1;
          state.totalPrice +=
            searchedProduct.takenQuantity * searchedProduct.price;
          state.cart.push(searchedProduct);
        } else {
          state.error =
            "You can only add products from one store to your shopping cart";
        }
      } else {
        state.error = "Product not found";
      }
    },

    removeFromCart(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter(({ _id, takenQuantity, price }) => {
        if (_id === action.payload) {
          state.totalPrice -= takenQuantity * price;
          return false;
        }

        return true;
      });
    },

    updateQuantity(
      state,
      action: PayloadAction<{ id: string; totalQuantity: number }>
    ) {
      const { id, totalQuantity } = action.payload;

      state.cart = state.cart.map((prod) => {
        if (prod._id === id) {
          state.totalPrice += (totalQuantity - prod.takenQuantity) * prod.price;
          prod.takenQuantity = totalQuantity;
        }
        return prod;
      });
    },
    checkTotalPrice(state) {
      state.totalPrice = state.cart.reduce(
        (acc, { price, takenQuantity }) => takenQuantity * price + acc,
        0
      );
    },
    setUserOrderData(state, action: PayloadAction<IOrderData>) {
      state.userOrderData = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(
        getStores.fulfilled,
        (state, action: PayloadAction<IStoreResponse[]>) => {
          state.isLoading = false;
          state.stores = action.payload;
        }
      )
      .addCase(
        getStoreProducts.fulfilled,
        (state, action: PayloadAction<IProduct[]>) => {
          state.isLoading = false;

          if (action.payload.length === 0) {
            state.activeStoreProducts = null;
            return;
          }

          const { store: storeId = null } = action.payload[0];
          state.stores = state.stores.map((store) => {
            if (store._id === storeId) {
              store.products = action.payload;
            }

            return store;
          });
          state.activeStoreProducts = action.payload;
        }
      )
      .addCase(makeOrder.fulfilled, (state) => {
        state.totalPrice = 0;
        state.cart = [];
        state.isLoading = false;
      })
      .addCase(
        getOrderHistory.fulfilled,
        (state, action: PayloadAction<IOrderHistory[]>) => {
          state.isLoading = false;
          state.orderHistory = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map((action) => action.pending)),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map((action) => action.rejected)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const {
  setInCart,
  setUserOrderData,
  removeFromCart,
  updateQuantity,
  checkTotalPrice,
  setCurrentStore,
} = productsSlice.actions;

export default productsSlice.reducer;
