import { configureStore } from "@reduxjs/toolkit";
import postDataReducer from "./PostData";
import userProfileSlice from "./ProfileData";

export default configureStore({
  reducer: {
    postData: postDataReducer,
    profileData: userProfileSlice
  }
});
