import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedBodyPart: "all",
  search: "",
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setSearch: (state, actions) => {
      state.search = actions.payload;
    },
    setSelectedBodyPart: (state, actions) => {
      state.selectedBodyPart = actions.payload;
    },
  },
});

export default filterSlice.reducer;
export const { setSearch, setSelectedBodyPart } = filterSlice.actions;
