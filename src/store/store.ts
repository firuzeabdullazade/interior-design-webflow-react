import { blogDetailsPageReducer } from '../app/pages/BlogDetailsPage/blogDetailsPage.slice';
import { blogPageReducer } from '../app/pages/BlogPage/blogPage.slice';
import { configureStore } from '@reduxjs/toolkit';
import { homePageReducer } from '../app/pages/HomePage/homePage.slice';
import { projectDetailsPageReducer } from '../app/pages/ProjectDetails/projectDetailsPage.slice';
import { servicesPageReducer } from '../app/pages/ServicesPage/servicesPage.slice';
import { userWidgetReducer } from '../app/shared/UserWidget/userWidget.slice';
export const store = configureStore({
  reducer: {
    homePage: homePageReducer,
    userWidget: userWidgetReducer,
    servicesPage: servicesPageReducer,
    blogDetailsPage: blogDetailsPageReducer,
    blogPage: blogPageReducer,
    projectDetailsPage: projectDetailsPageReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
