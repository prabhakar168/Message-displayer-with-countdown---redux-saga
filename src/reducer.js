import { combineReducers, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "inputs",
  initialState: {
    searchInput: null
  },
  reducers: {
    setSearchInput(state, action) {
      const { searchInput } = action.payload;

      return { ...state, searchInput };
    }
  }
});

export const { setSearchInput } = slice.actions;
export default combineReducers({
  slice: slice.reducer
});
