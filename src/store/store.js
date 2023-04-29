import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartReducer";

function localStorageMiddleware({ getState }) {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem("applicationState", JSON.stringify(getState()));
    return result;
  };
}

const reHydrateStore = () => {
  if (localStorage.getItem("applicationState") !== null) {
    return JSON.parse(localStorage.getItem("applicationState"));
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
