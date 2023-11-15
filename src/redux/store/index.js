import { configureStore } from "@reduxjs/toolkit";

import characterReducer from "../reducer/characterSlice";
export const store = configureStore({
    reducer: {
        character: characterReducer
    }
});
