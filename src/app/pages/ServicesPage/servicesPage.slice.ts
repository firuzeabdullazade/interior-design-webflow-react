import { createSlice } from "@reduxjs/toolkit";
import contentFirst from "../../../assets/images/content first.png";
import firstIcon from "../../../assets/icons/content first icon.svg";
import secondIcon from "../../../assets/icons/content second icon.svg";
import contentSecond from "../../../assets/images/content second.png";
import contentThird from "../../../assets/images/content third.png";
import thirdIcon from "../../../assets/icons/content third icon.svg";
import contentFourth from "../../../assets/images/content fourth.png";
import fourthIcon from "../../../assets/icons/content fourth icon.svg";

interface InfoPartGridItem {
  head: string;
  title: string;
}

interface WorkPartGridItem {
  imageSrc: string;
  iconSrc: string;
  number: string;
  subhead: string;
  title: string;
  isLeft: boolean;
}

interface ServicesPageState {
  reviews: InfoPartGridItem[];
  works: WorkPartGridItem[];
}

const initialState: ServicesPageState = {
  reviews: [
    {
      head: 'Project Plan',
      title:
        "Efficient execution of our interior design project plan will ensure timely completion while delivering exceptional results that exceed our clients' expectations.",
    },
    {
      head: 'Realization',
      title:
        'Realization is the pivotal stage where ideas take shape and come to life through meticulous planning, precise execution, and unwavering attention to detail.',
    },
    {
      head: 'Retail Design',
      title:
        'Retail design merges branding, spatial planning, and visual merchandising to enhance the shopping experience and engage customers.',
    },
    {
      head: '2d/3d Art Work',
      title:
        '2D/3D artwork captivates with its visual brilliance and evokes deep emotions through creative expression.',
    },
    {
      head: 'Interior Work',
      title:
        'Interior work bridges the gap between imagination and reality, transforming spaces into captivating and functional designs. You can easily find them in our webpage.',
    },
    {
      head: 'Decoration Work',
      title:
        'Decoration work transforms spaces with carefully chosen elements, creating personalized and visually captivating environments according your choices',
    },
  ],
  works: [
    {
      imageSrc: contentFirst,
      iconSrc: firstIcon,
      number: "01",
      subhead: "Concept & Details",
      title:
        "The concept of interior design involves developing a cohesive vision for a space by considering factors such as client requirements, functionality, aesthetics, spatial planning, color schemes, furniture selection, lighting design, material choices, and decorative elements.",
      isLeft: false,
    },
    {
      imageSrc: contentSecond,
      iconSrc: secondIcon,
      number: "02",
      subhead: "Idea for Work",
      title:
        "The idea of interior design work revolves around transforming spaces by combining creativity, functionality, and aesthetics to meet the needs and preferences of clients while enhancing the overall atmosphere and usability of the environment.",
      isLeft: true,
    },
    {
      imageSrc: contentThird,
      iconSrc: thirdIcon,
      number: "03",
      subhead: "Design",
      title:
        "Design encompasses the process of envisioning and creating solutions that are visually appealing, functional, and purposeful, incorporating elements such as form, function, aesthetics, materials, and usability.",
      isLeft: false,
    },
    {
      imageSrc: contentFourth,
      iconSrc: fourthIcon,
      number: "04",
      subhead: "Perfection",
      title:
        "Perfection in design is achieved through a meticulous attention to detail, thoughtful consideration of every element, and the pursuit of excellence in creating a harmonious, functional, and visually pleasing solution that fulfills its intended purpose flawlessly.",
      isLeft: true,
    },
  ],
};
export const servicesPageSlice = createSlice({
  name: 'servicesPage',
  initialState: initialState,
  reducers: {},
});
export const servicesPageReducer = servicesPageSlice.reducer;
