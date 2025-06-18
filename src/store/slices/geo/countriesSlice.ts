import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {http} from "@/lib/http";
import {Country} from "@/types/app/geo.ts";

export const fetchCountries = createAsyncThunk<Country[]>(
  "countries/fetchCountries",
  async () => {
    const response = await http.get<{ data: Country[] }>("/geo/countries");

    return response.data.data;
  },
);

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    items: [] as Country[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка загрузки стран";
      });
  },
});

export default countriesSlice.reducer;
