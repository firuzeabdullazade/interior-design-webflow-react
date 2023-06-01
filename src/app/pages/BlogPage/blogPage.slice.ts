import fifthArticle from '../../../assets/images/fifthArticle.png';
import firstArticle from '../../../assets/images/firstArticle.png';
import firstKitchanImage from '../../../assets/images/details image.png';
import firstLivingRoomImage from '../../../assets/images/firstLivingRoomImage.png';
import secondLivingRoomImage from '../../../assets/images/secondLivingRoomImage.jpg';
import firstInteriorImage from '../../../assets/images/firstInteriorImage.jpeg';
import secondInteriorImage from '../../../assets/images/secondInteriorImage.jpg';
import fourthArticle from '../../../assets/images/fourthArticle.png';
import secondArticle from '../../../assets/images/secondArticle.png';
import secondKitchanImage from '../../../assets/images/secondKitchanImage.png';
import sixthArticle from '../../../assets/images/sixthArticle.png';
import thirdArticle from '../../../assets/images/thirdArticle.png';
import firstPostPicture from '../../../assets/images/firstPostPicture.png';
import { createSlice } from '@reduxjs/toolkit';

interface ArticlesGridItem {
  secondPostImage: string;
  firstPostImage: string;
  postId: number;
  date: string;
  tag: string;
  imageSrc: string;
  content: string;
  postContent: string;
}

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

    {
      postId: 1,
      date: '26 December,2022',
      tag: 'Kitchan Design',
      imageSrc: fourthArticle,
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
      imageSrc: fifthArticle,
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
      imageSrc: sixthArticle,
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
  reducers: {},
});

export const blogPageReducer = blogPageSlice.reducer;
