// postalCodeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const postalSlice = createSlice({
  name: "postalCode",
  initialState: { value: null, locationData: null },
  reducers: {
    setCode: (state, action) => {
      state.value = action.payload;
    },
    setLocationData: (state, action) => {
      state.locationData = action.payload;
    },
    clearData: (state) => {
      state.value = null;
      state.locationData = null;
    },
  },
});

export const { setCode, setLocationData, clearData } = postalSlice.actions;
export const selectCode = (state) => state.postalCode.value;
export const selectLocationData = (state) => state.postalCode.locationData;

export default postalSlice.reducer;
