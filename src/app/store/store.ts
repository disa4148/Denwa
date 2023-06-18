import { configureStore } from "@reduxjs/toolkit"
import alertSlice from "./slices/alertSlice"


export const store = configureStore({
   reducer: {
      alert: alertSlice
   },
})



