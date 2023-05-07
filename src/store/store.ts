import { configureStore } from "@reduxjs/toolkit";
import { projectReducer } from '../app/pages/HomePage/components/Project/project.slice';

export const store = configureStore ({
    reducer: {
        'project': projectReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
