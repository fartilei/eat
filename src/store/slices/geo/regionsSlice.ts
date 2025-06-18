import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {http} from "@/lib/http";
import {Region} from "@/types/app/geo.ts";

export const fetchRegions = createAsyncThunk<Region[]>(
  "regions/fetchRegions",
  async () => {
    const response = await http.get<{ data: Region[] }>("/geo/regions");

    return response.data.data;
  },
);

const regionsSlice = createSlice({
  name: "regions",
  initialState: {
    items: [] as Region[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRegions.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchRegions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка загрузки регионов";
      });
  },
});

export default regionsSlice.reducer;
