import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface IInitialState {
   type: "success" | "information" | "warning" | "error" | null
   title: string | null
   message: string | null
}

const initialState: IInitialState = {
   type: null,
   title: null,
   message: null,
}

export const alertSlice = createSlice({
   name: "alert",
   initialState,
   reducers: {
      createAlert: (state, action: PayloadAction<IInitialState>) => {
         state.type = action.payload.type
         state.title = action.payload.title
         state.message = action.payload.message
      },
      nullifyAlert: (state) => {
         state.type = initialState.type
         state.title = initialState.title
         state.message = initialState.message
      },
   },
})

export const {createAlert, nullifyAlert} = alertSlice.actions
export default alertSlice.reducer