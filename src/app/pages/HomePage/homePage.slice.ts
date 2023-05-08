import { createSlice } from "@reduxjs/toolkit";
import feedFirst from "../../../assets/images/feedFirst.png";
import feedSecond from "../../../assets/images/feedSecond.png";
import feedThird from "../../../assets/images/feedThird.png";
interface FeedBackGridItem {
  imageSrc: string;
  name: string;
  country: string;
  feedBack: string;
}
interface HomePageState {
  feedbacks: FeedBackGridItem[];
}
const initialState: HomePageState = {
  feedbacks: [
    {
      imageSrc: feedFirst,
      name: "Nattasha Mith",
      country: "Sydney, USA",
      feedBack:
        "This well-designed interior design webpage  showcase a variety of styles and options to inspire and inform visitors.",
    },
    {
      imageSrc: feedSecond,
      name: "Raymond Galario",
      country: "Sydney, Australia",
      feedBack:
        "Navigation and organization are key factors in making an interior design webpage user-friendly and easy to use.",
    },
    {
      imageSrc: feedThird,
      name: "Benny Roll",
      country: "Sydney, New York",
      feedBack:
        "High-quality images and well-written descriptions can help visitors visualize and understand the designer's vision for a space.",
    },
  ],
};

export const homePageSlice = createSlice({
  name: "homePage",
  initialState: initialState,
  reducers: {},
});

export const homePageReducer = homePageSlice.reducer;
