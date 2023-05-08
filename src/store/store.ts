import { configureStore } from "@reduxjs/toolkit";
import { homePageReducer } from "../app/pages/HomePage/homePage.slice";

export const store = configureStore ( {
        reducer: {
         'homePage': homePageReducer,
        }
 });
 export type RootState = ReturnType<typeof store.getState>;