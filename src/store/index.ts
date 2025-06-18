import {configureStore} from "@reduxjs/toolkit";

import countriesReducer from "@/store/slices/geo/countriesSlice";
import regionsReducer from "@/store/slices/geo/regionsSlice";
import citiesReducer from "@/store/slices/geo/citiesSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    regions: regionsReducer,
    cities: citiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
