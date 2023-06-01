import { createSlice } from '@reduxjs/toolkit';
interface DesignSprints {
  order: number;
  title: string;
}
interface NewsGridItem {
  newsId: number;
  newsHead: string;
  date: string;
}
interface TagsGrid {
  buttonId: number;
  buttonTitle: string;
}
interface BlogDetailsPageState {
  titles: DesignSprints[];
  news: NewsGridItem[];
  tags: TagsGrid[];
  postState: object;
}

const initialState: BlogDetailsPageState = {
  titles: [
    {
      order: 1,
      title:
        ' Problem Framing and Research: Begin by understanding the client`s needs, conducting research, and gathering data to identify key challenges or opportunities in the interiordesign project.',
    },
    {
      order: 2,
      title:
        ' Ideation and Concept Development:Use brainstorming sessions, mood boards, and collaborative exercises to generate diverse design ideas.',
    },
    {
      order: 3,
      title:
        'Rapid Prototyping:Create rapid prototypes of the chosen design concepts. This could involvedeveloping 3D models, mockups, or virtual walkthroughs to provide a tangible representation of the design. These prototypes help visualize the final outcome and facilitatedecision-making.',
    },
    {
      order: 4,
      title:
        'User Testing and Feedback: Share the prototypes with users or stakeholders for feedback. Conduct observations, interviews, or surveys to gather valuable insights and identify any necessary improvements or adjustments to the design.',
    },
    {
      order: 5,
      title:
        ' Refinement and Implementation:Based on the feedback received, refine and iterate on thedesign. Collaborate with the client and other stakeholders to make necessary adjustments efficiently. Once the design is finalized, proceed with the implementation phase, including procurement, construction, and installation processes.',
    },
  ],
  news: [
    {
      newsId: 1,
      newsHead: 'We Focus Icredible Designs For Kitchen',
      date: '26/12/2022',
    },
    {
      newsId: 2,
      newsHead: 'We Focus On Gorgeous Interior Designs',
      date: '25/12/2022',
    },
    {
      newsId: 3,
      newsHead: 'We Focus On Comfortable Living Rooms',
      date: '22/12/2022',
    },
  ],
  tags: [
    {
      buttonId: 1,
      buttonTitle: 'Kitchen',
    },

    {
      buttonId: 2,
      buttonTitle: 'Living Room',
    },
    {
      buttonId: 3,
      buttonTitle: 'Interior Design',
    },
    {
      buttonId: 4,
      buttonTitle: 'Bedroom',
    },
    {
      buttonId: 5,
      buttonTitle: 'Architecture',
    },
  ],
  postState: {},
};
export const blogDetailsPageSlice = createSlice({
  name: 'blogDetailsPage',
  initialState: initialState,
  reducers: {
    stateLoad: (state, action) => {
      state.postState = action.payload;
    },
  },
});

export const { stateLoad } = blogDetailsPageSlice.actions;
export const blogDetailsPageReducer = blogDetailsPageSlice.reducer;
