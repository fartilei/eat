import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {http} from "@/lib/http";
import {City} from "@/types/app/geo.ts";

export const fetchCities = createAsyncThunk<City[]>(
  "cities/fetchCities",
  async () => {
    const response = await http.get<{ data: City[] }>("/geo/cities");

    return response.data.data;
  },
);

const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    items: [] as City[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка загрузки городов";
      });
  },
});

export default citiesSlice.reducer;
