import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchAllTrucks = createAsyncThunk(
  'catalog/fechAllTruks',
  async (_, thunkAPI) => {
    const { catalog, filter } = thunkAPI.getState();
    const { page } = catalog;
    const { location, form, AC, transmission, kitchen, TV, bathroom } = filter;
    
    const params = new URLSearchParams({
      page,
      limit: 4,
      ...(location && { location }),
      ...(form && { form }),
      ...(AC && { AC: true }),
      ...(transmission && { transmission: "automatic" }),
      ...(kitchen && { kitchen: true }),
      ...(TV && { TV: true }),
      ...(bathroom && { bathroom: true }),
    });

    try {
      const response = await axios.get(`${BASE_URL}/campers?${params}`);
      return response.data;

    } catch (error) {

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllTrucksForFirstPage = createAsyncThunk(
  'catalog/fetchAllTrucksForFirstPage',
  async (_, thunkAPI) => {
    const { filter } = thunkAPI.getState();
    const { location, form, AC, transmission, kitchen, TV, bathroom } = filter;
    
    const params = new URLSearchParams({
      page: 1,
      limit: 4,
      ...(location && { location }),
      ...(form && { form }),
      ...(AC && { AC: true }),
      ...(transmission && { transmission: "automatic" }),
      ...(kitchen && { kitchen: true }),
      ...(TV && { TV: true }),
      ...(bathroom && { bathroom: true }),
    });
    
    try {
      const response = await axios.get(`${BASE_URL}/campers?${params}`);
      return response.data;

    } catch (error) {

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTruckById = createAsyncThunk(
  'catalog/fetchTruckById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/campers/${id}`);
      return response.data;

    } catch (error) {
      
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);