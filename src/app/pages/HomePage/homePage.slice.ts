import { createSlice } from "@reduxjs/toolkit";
import feedFirst from "../../../assets/images/feedFirst.png";
import feedSecond from "../../../assets/images/feedSecond.png";
import feedThird from "../../../assets/images/feedThird.png";
import firstImage from "../../../assets/images/firstImage.png";
import secondImage from "../../../assets/images/secondImage.png";
import thirdImage from "../../../assets/images/thirdImage.png";
import fourthImage from "../../../assets/images/fourthImage.png";
import firstArticle from "../../../assets/images/firstArticle.png";
import secondArticle from "../../../assets/images/secondArticle.png";
import thirdArticle from "../../../assets/images/thirdArticle.png";

interface FeedBackGridItem {
  imageSrc: string;
  name: string;
  country: string;
  feedBack: string;
}

interface ProjectGridItem {
  imageSrc: string;
  head: string;
}

interface BlogPartGridItem {
  date: string;
  tag: string;
  imageSrc: string;
  content: string;
}
interface HomePageState {
  feedbacks: FeedBackGridItem[];
  projects: ProjectGridItem[];
  articles: BlogPartGridItem[];
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

  projects: [
    {
      imageSrc: firstImage,
      head: "Modern Kitchan",
    },

    {
      imageSrc: secondImage,
      head: "Modern Sideboard",
    },

    {
      imageSrc: thirdImage,
      head: "System Table",
    },

    {
      imageSrc: fourthImage,
      head: "Minimal Livingroom",
    },
  ],

  articles: [
    {
      date: "26 December,2022",
      tag: "Kitchan Design",
      imageSrc: firstArticle,
      content: "Let’s Get Solution For Building Construction Work",
    },

    {
      date: "22 December,2022",
      tag: "Living Design",
      imageSrc: secondArticle,
      content: `Low Cost Latest Invented Interior Designing Ideas`,
    },

    {
      date: "25 December,2022",
      tag: "Interior Design",
      imageSrc: thirdArticle,
      content: "Best For Any Office & Business Interior Solution",
    },
  ],
};

export const homePageSlice = createSlice({
  name: "homePage",
  initialState: initialState,
  reducers: {},
});

export const homePageReducer = homePageSlice.reducer;
