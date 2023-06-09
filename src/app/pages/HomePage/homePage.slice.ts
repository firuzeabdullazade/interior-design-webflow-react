import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import feedFirst from '../../../assets/images/feedFirst.png';
import feedSecond from '../../../assets/images/feedSecond.png';
import feedThird from '../../../assets/images/feedThird.png';
import firstArticle from '../../../assets/images/firstArticle.png';
import firstInteriorImage from '../../../assets/images/firstInteriorImage.jpeg';
import firstKitchanImage from '../../../assets/images/details image.png';
import firstLivingRoomImage from '../../../assets/images/firstLivingRoomImage.png';
import secondArticle from '../../../assets/images/secondArticle.png';
import secondInteriorImage from '../../../assets/images/secondInteriorImage.jpg';
import secondKitchanImage from '../../../assets/images/secondKitchanImage.png';
import secondLivingRoomImage from '../../../assets/images/secondLivingRoomImage.jpg';
import thirdArticle from '../../../assets/images/thirdArticle.png';

interface FeedBackGridItem {
  imageSrc: string;
  name: string;
  country: string;
  feedBack: string;
}

interface ProjectGridItem {
  projectId: number;
  imageSrc: string;
  head: string;
  content: string;
  projectImage: string;
}

interface BlogPartGridItem {
  postId: number;
  date: string;
  tag: string;
  imageSrc: string;
  content: string;
  firstPostImage: string;
  secondPostImage: string;
  postContent: string;
}
interface HomePageState {
  feedbacks: FeedBackGridItem[];
  projects: ProjectGridItem[];
  articles: BlogPartGridItem[];
  cards: WorkPartProps[];
}

interface WorkPartProps {
  head: string;
  title: string;
}

const initialState: HomePageState = {
  feedbacks: [
    {
      imageSrc: feedFirst,
      name: 'Nattasha Mith',
      country: 'Sydney, USA',
      feedBack:
        'This well-designed interior design webpage  showcase a variety of styles and options to inspire and inform visitors.',
    },
    {
      imageSrc: feedSecond,
      name: 'Raymond Galario',
      country: 'Sydney, Australia',
      feedBack:
        'Navigation and organization are key factors in making an interior design webpage user-friendly and easy to use.',
    },
    {
      imageSrc: feedThird,
      name: 'Benny Roll',
      country: 'Sydney, New York',
      feedBack:
        "High-quality images and well-written descriptions can help visitors visualize and understand the designer's vision for a space.",
    },
  ],

  projects: [],

  articles: [
    {
      postId: 1,
      date: '26 December,2022',
      tag: 'Kitchan Design',
      imageSrc: firstArticle,
      firstPostImage: firstKitchanImage,
      secondPostImage: secondKitchanImage,
      content: 'Let’s Get Solution For Building Construction Work',
      postContent: `<p>
      The kitchen is often referred to as the heart of the home, where culinary delights are created, memories are made, and families gather. Designing a functional and visually appealing kitchen involves a careful balance of aesthetics, ergonomics, and practicality. In this article, we will explore the essential aspects of kitchen design, guiding you through the transformative process of crafting a stunning and efficient culinary space. 
      A well-designed kitchen is more than just a place to cook; it is a space that inspires creativity, fosters efficient workflows, and accommodates the diverse needs of its users. Whether you're starting from scratch or renovating an existing kitchen, understanding your requirements, preferences, and lifestyle is crucial in creating a design that seamlessly integrates with your daily routines.
      </p>
      <p>
      Professional guidance from kitchen designers or interior designers specializing in kitchens can be invaluable. These experts possess in-depth knowledge of space planning, storage solutions, and the latest trends in kitchen design. They can help you optimize the available space, provide insights into material selection, and offer innovative ideas that enhance both the functionality and visual appeal of your kitchen.
      </p>`,
    },

    {
      postId: 2,
      date: '22 December,2022',
      tag: 'Living Design',
      imageSrc: secondArticle,
      firstPostImage: firstLivingRoomImage,
      secondPostImage: secondLivingRoomImage,
      content: `Low Cost Latest Invented Interior Designing Ideas`,
      postContent: `<p>
      Creating a living room that reflects your unique style, offers exceptional comfort, and embodies functional elegance requires thoughtful planning and flawless execution. The construction process for your living room is an opportunity to transform an empty space into a welcoming haven where you can relax, entertain, and make lasting memories with loved ones. In this article, we will delve into the essential aspects of building a stunning living room, guiding you from the initial design considerations to the final finishing touches.
      </p>
      <p>
      Your living room serves as the centerpiece of your home, a space where you can showcase your personal taste and create an inviting atmosphere for gatherings and relaxation. From the layout and structural modifications to the choice of materials and finishing details, every decision you make contributes to the overall ambiance and functionality of the room. By approaching the construction process with careful attention to detail and a clear vision of your desired outcome, you can bring your dream living room to life.
      </p>`,
    },

    {
      postId: 3,
      date: '25 December,2022',
      tag: 'Interior Design',
      imageSrc: thirdArticle,
      firstPostImage: firstInteriorImage,
      secondPostImage: secondInteriorImage,
      content: 'Best For Any Office & Business Interior Solution',
      postContent: `<p>
      Interior design is the art of creating a harmonious and visually appealing space that reflects your personality, enhances functionality, and promotes a sense of well-being. Whether you are starting from scratch or looking to revamp your existing space, the process of interior design encompasses a wide range of considerations and decisions. In this article, we will explore the fundamental aspects of interior design, guiding you through the transformative journey of crafting a stunning and cohesive living space. 
      </p>
      <p>
      The interior design of your home is a reflection of your unique style and preferences. It goes beyond mere aesthetics, encompassing the thoughtful arrangement of furniture, the selection of color schemes, the play of textures, and the integration of lighting and accessories. A well-designed interior has the power to create a sanctuary that nurtures and inspires you, providing a backdrop for your daily activities and personal experiences.When embarking on an interior design project, it is crucial to start with a clear vision. Consider the overall atmosphere you wish to create and the purpose of the space. Think about how you want to feel when you enter the room and what activities will take place there. Understanding the function and mood you desire will serve as a guiding principle throughout the design process.
      </p>`,
    },
  ],

  cards: [
    {
      head: 'Project Plan',
      title:
        "Efficient execution of our interior design project plan will ensure timely completion while delivering exceptional results that exceed our clients' expectations.",
    },
    {
      head: 'Interior Work',
      title:
        'Interior work bridges the gap between imagination and reality, transforming spaces into captivating and functional designs. You can easily find them in our webpage.',
    },
    {
      head: 'Realization',
      title:
        'Realization is the pivotal stage where ideas take shape and come to life through meticulous planning, precise execution, and unwavering attention to detail.',
    },
  ],
};

export const homePageSlice = createSlice({
  name: 'homePage',
  initialState: initialState,
  reducers: {
    getProjects: (state, action: PayloadAction<ProjectGridItem[]>) => {
      state.projects = action.payload;
    },
  },
});

export const { getProjects } = homePageSlice.actions;
export const homePageReducer = homePageSlice.reducer;
