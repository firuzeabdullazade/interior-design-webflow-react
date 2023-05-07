import { createSlice } from "@reduxjs/toolkit";
interface FeedBackGridItemState {
  imageSrc: string;
  name: string;
  country: string;
  feedBack: string;
}

const initialState: FeedBackGridItemState ={
    imageSrc: '',
    name: '',
    country: '',
    feedBack: '',
}

export const feedBackGridItemSlice = createSlice ({
    name: "feedBackGridItem",
    initialState: initialState,
    reducers:{
      
          
    },
});

export const feedBackGridItemReducer = feedBackGridItemSlice.reducer;