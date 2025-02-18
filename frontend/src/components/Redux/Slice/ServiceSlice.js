import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
  name: "Service",
  initialState: {
    formvalue: {
      billNumber: "",  
      name: "",
      cellNumber: "",
      alternateNumber: "",
      address: "",
      guaranteeStatus: "",
      problem: "",
      item: "",
      status: "",
      otherStatus: "",
    },
  },
  reducers: {
    updateForm: (state, action) => {
      state.formvalue = { ...state.formvalue, ...action.payload };
    },
    resetForm: (state) => {
      state.formvalue = {
        billNumber: "",
        name: "",
        cellNumber: "",
        alternateNumber: "",
        address: "",
        guaranteeStatus: "",
        problem: "",
        item: "",
        status: "",
        otherStatus: "",
      };
    },
  },
});

export const { updateForm, resetForm } = serviceSlice.actions;
export default serviceSlice.reducer;
