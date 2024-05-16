import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import privacySlice from "./privacySlice";

const CounterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        privacy: privacySlice.reducer
    }
})
export default CounterStore