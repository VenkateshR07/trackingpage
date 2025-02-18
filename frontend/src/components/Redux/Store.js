import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "../Redux/Slice/ServiceSlice";

export default configureStore({
  reducer: {
    Service: serviceReducer,
  },
});
