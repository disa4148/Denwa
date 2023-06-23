import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface IInitialState {
   type: "success" | "information" | "warning" | "error" | null
   message: string | null
}

const initialState: IInitialState = {
   type: null,
   message: null,
}

export const alertSlice = createSlice({
   name: "alert",
   initialState,
   reducers: {
      createAlert: (state, action: PayloadAction<IInitialState>) => {
         state.type = action.payload.type
         state.message = action.payload.message
      },
      nullifyAlert: (state) => {
         state.type = initialState.type
         state.message = initialState.message
      },
   },
})

export const {createAlert, nullifyAlert} = alertSlice.actions
export default alertSlice.reducer