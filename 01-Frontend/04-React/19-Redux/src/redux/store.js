import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./slices/CounterSlics";


export const store = configureStore({
    reducer : {
        counter : CounterSlice.reducer
    }
})