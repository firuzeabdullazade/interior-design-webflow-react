import { createSlice } from '@reduxjs/toolkit';

interface InfoPartGridItem {
  head: string;
  title: string;
}
interface ServicesPageState {
  reviews: InfoPartGridItem[];
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
};
export const servicesPageSlice = createSlice({
  name: 'servicesPage',
  initialState: initialState,
  reducers: {},
});
export const servicesPageReducer = servicesPageSlice.reducer;
