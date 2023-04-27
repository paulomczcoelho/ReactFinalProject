import { createSlice, isFulfilled } from "@reduxjs/toolkit";
import getData, { fetchData } from "../middleware/fetchData";

const initialState = {
  data: [],
};

const emailSlice = createSlice({
  name: "sliceEmail",
  initialState, // change here
  reducers: {
    addEmail(state, action) {
      state.data.push(action.payload);
    },
    removeEmail(state, action) {
      state.data = state.data.filter((email) => email.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addEmail, removeEmail } = emailSlice.actions;
export default emailSlice.reducer;
