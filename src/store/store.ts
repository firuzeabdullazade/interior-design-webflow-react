import { configureStore } from "@reduxjs/toolkit";
import { feedBackGridItemReducer } from '../app/pages/HomePage/components/TestimonialPart/components/FeedBackGridItem/feedBackGridItem.slice'

export const store = configureStore ( {
        reducer: {
         'feedBackGridItem': feedBackGridItemReducer,
        }
 });
 export type RootState = ReturnType<typeof store.getState>;