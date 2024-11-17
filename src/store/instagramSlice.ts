// src/store/instagramSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InstagramState {
  videoUrls: string[];
}

const initialState: InstagramState = {
  videoUrls: [],
};

const instagramSlice = createSlice({
  name: "instagram",
  initialState,
  reducers: {
    addVideoUrls(state, action: PayloadAction<string[]>) {
      state.videoUrls = action.payload;
    },
    addVideoUrl(state, action: PayloadAction<string>) {
      state.videoUrls.push(action.payload);
    },
  },
});

export const { addVideoUrls, addVideoUrl } = instagramSlice.actions;

export default instagramSlice.reducer;
