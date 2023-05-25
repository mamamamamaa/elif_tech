import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createWrapper } from "next-redux-wrapper";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productsReduces from "@/redux/features/productsSlice";

export function makeStore() {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return configureStore({
      reducer: {
        products: productsReduces,
      },
    });
  } else {
    const persistConfig = {
      key: "nextjs",
      whitelist: ["cart"],
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, productsReduces);

    const store = configureStore({
      reducer: {
        products: persistedReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          immutableCheck: false,
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    });

    // @ts-ignore
    store.__persistor = persistStore(store);
    //documentation hack --> https://github.com/kirill-konshin/next-redux-wrapper#usage-with-redux-persist

    return store;
  }
}

export const store = makeStore();

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore["getState"]>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<RootStore>(makeStore);
