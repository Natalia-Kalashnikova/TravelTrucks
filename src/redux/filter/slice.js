import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  location: '',
  form: '',
  AC: false,
  transmission: false,
  kitchen: false,
  TV: false,
  bathroom: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },
    toggleAC: state => {
      state.AC = !state.AC;
    },
    setTransmission: state => {
      state.transmission = !state.transmission;
    },
    toggleKitchen: state => {
      state.kitchen = !state.kitchen;
    },
    toggleTV: state => {
      state.TV = !state.TV;
    },
    toggleBathroom: state => {
      state.bathroom = !state.bathroom;
    },
    resetFilters: (state) => {
      state.location = '';
      state.form = '';
      state.AC = false;
      state.transmission = false;
      state.kitchen = false;
      state.TV = false;
      state.bathroom = false;
    },
  },
});

export const {
  setLocation,
  setForm,
  toggleAC,
  setTransmission,
  toggleKitchen,
  toggleTV,
  toggleBathroom,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;