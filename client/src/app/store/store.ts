import { combineReducers, configureStore } from "@reduxjs/toolkit"
import alertReducer from "./slices/alertSlice"

const rootReducer = combineReducers({
   alertReducer,
})

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
   })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
