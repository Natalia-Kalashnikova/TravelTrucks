import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllTrucks,
  fetchAllTrucksForFirstPage,
  fetchTruckById,
} from './operations.js';


const initialState = {
  trucks: [],
  isLoadingTruck: false,
  errorTruck: null,
  isLoading: false,
  error: null,
  selectedTruck: {},
  page: 1,
  hasMore: false,
  total: 0,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllTrucks.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllTrucks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.trucks = [...state.trucks, ...action.payload.items];
        state.total = action.payload.total;
        state.page += 1;
        state.hasMore = state.trucks.length < state.total;
      })
      .addCase(fetchAllTrucks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.trucks = [];
        state.hasMore = false;
      })
      .addCase(fetchAllTrucksForFirstPage.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllTrucksForFirstPage.fulfilled, (state, action) => {
        state.page = 1;
        state.isLoading = false;
        state.error = null;
        state.trucks = action.payload.items;
        state.total = action.payload.total;
        state.page += 1;
        state.hasMore = state.trucks.length < state.total;
      })
      .addCase(fetchAllTrucksForFirstPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.trucks = [];
        state.hasMore = false;
      })
      .addCase(fetchTruckById.pending, state => {
        state.isLoadingTruck = true;
      })
      .addCase(fetchTruckById.fulfilled, (state, action) => {
        state.isLoadingTruck = false;
        state.errorTruck = null;
        state.selectedTruck = action.payload;
      })
      .addCase(fetchTruckById.rejected, (state, action) => {
        state.isLoadingTruck = false;
        state.errorTruck = action.payload;
        state.selectedTruck = {};
      });
  },
});

export default catalogSlice.reducer;