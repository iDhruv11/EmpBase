import { configureStore } from "@reduxjs/toolkit";
import EmpReducer from "./EmpSlice"

const EmpStore = configureStore({
    reducer: {
        EmpSlice: EmpReducer,
    }
})

export { EmpStore };