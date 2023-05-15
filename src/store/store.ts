import { configureStore } from '@reduxjs/toolkit';
import { homePageReducer } from '../app/pages/HomePage/homePage.slice';
import { servicesPageReducer } from '../app/pages/ServicesPage/servicesPage.slice';
import { userWidgetReducer } from '../app/shared/UserWidget/userWidget.slice';

export const store = configureStore({
  reducer: {
    homePage: homePageReducer,
    userWidget: userWidgetReducer,
    servicesPage: servicesPageReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
