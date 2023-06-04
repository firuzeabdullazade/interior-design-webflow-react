import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import firstLivingRoomImage from '../../../assets/images/firstLivingRoomImage.png';
import firstPostPicture from '../../../assets/images/firstPostPicture.png';
import secondLivingRoomImage from '../../../assets/images/secondLivingRoomImage.jpg';
import { ArticlesGridItem } from '../../../models/Article';

interface PostsProps {
  postId: number;
  date: string;
  tag: string;
  imageSrc: string;
  content: string;
  firstPostImage: string;
  secondPostImage: string;
  postContent: string;
  text: string;
}

interface BlogPageState {
  articles: ArticlesGridItem[];
  posts: PostsProps[];
}

const initialState: BlogPageState = {
  articles: [],

  posts: [
    {
      postId: 2,
      date: '22 December,2022',
      tag: 'Living Design',
      imageSrc: firstPostPicture,
      firstPostImage: firstLivingRoomImage,
      secondPostImage: secondLivingRoomImage,
      content: `Low Cost Latest Invented Interior Designing Ideas`,
      postContent: `<p>
      Creating a living room that reflects your unique style, offers exceptional comfort, and embodies functional elegance requires thoughtful planning and flawless execution. The construction process for your living room is an opportunity to transform an empty space into a welcoming haven where you can relax, entertain, and make lasting memories with loved ones. In this article, we will delve into the essential aspects of building a stunning living room, guiding you from the initial design considerations to the final finishing touches.
      </p>
      <p>
      Your living room serves as the centerpiece of your home, a space where you can showcase your personal taste and create an inviting atmosphere for gatherings and relaxation. From the layout and structural modifications to the choice of materials and finishing details, every decision you make contributes to the overall ambiance and functionality of the room. By approaching the construction process with careful attention to detail and a clear vision of your desired outcome, you can bring your dream living room to life.
      </p>`,
      text: 'Explore the innovative and affordable interior design concepts that are reshaping the industry, offering a fresh and modern approach to decorating your space. Discover how to achieve a stylish and up-to-date look without breaking the bank with these latest low-cost design ideas.',
    },
  ],
};

export const blogPageSlice = createSlice({
  name: 'blogPage',
  initialState: initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<ArticlesGridItem[]>) => {
      state.articles = action.payload;
    },
  },
});

export const { setArticles } = blogPageSlice.actions;
export const blogPageReducer = blogPageSlice.reducer;
