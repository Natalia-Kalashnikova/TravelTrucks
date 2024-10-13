import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  favoriteList: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.favoriteList.indexOf(action.payload);
      if (index !== -1) {
        state.favoriteList.splice(index, 1);
      } else {
        state.favoriteList.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;