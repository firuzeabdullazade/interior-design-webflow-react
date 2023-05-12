import { configureStore } from "@reduxjs/toolkit";
import { homePageReducer } from "../app/pages/HomePage/homePage.slice";
import { userWidgetReducer } from "../app/shared/UserWidget/userWidget.slice";

export const store = configureStore ( {
        reducer: {
         'homePage': homePageReducer,
         'userWidget': userWidgetReducer,
        }
 });
 export type RootState = ReturnType<typeof store.getState>;