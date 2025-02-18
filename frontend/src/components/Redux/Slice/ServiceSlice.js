import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const serviceSlice = createSlice({
  name: "Service",
  initialState: {
    formvalue: {
      billNumber: "",  // Added billNumber field
      name: "",
      cellNumber: "",
      alternateNumber: "",
      address: "",
      warranty: "",
      problem: "",
      item: "",
      status: "",
      otherStatus: "",
      datetime: { date: "", time: "" }, // Initialize datetime object
    },
  },
  reducers: {
    updateForm: (state, action) => {
      state.formvalue = { ...state.formvalue, ...action.payload };

      axios.post("http://localhost:4002/ticketapi/postticket",state.formvalue).then(()=>{
          console.log("Ticket submitted successfully");
  
      }).catch(()=>{
        console.log("Failed to submit ticket");
      })


    },
    resetForm: (state) => {
      state.formvalue = {
        billNumber: "",  // Reset billNumber field
        name: "",
        cellNumber: "",
        alternateNumber: "",
        address: "",
        warranty: "",
        problem: "",
        item: "",
        status: "",
        otherStatus: "",
        datetime: { date: "", time: "" },
      };


    },
  },
});

export const { updateForm, resetForm } = serviceSlice.actions;
export default serviceSlice.reducer;
