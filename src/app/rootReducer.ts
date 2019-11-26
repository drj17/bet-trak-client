import { combineReducers } from "@reduxjs/toolkit";
import profileSlice from "../features/profile/profileSlice";

const rootReducer = combineReducers({
  profile: profileSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
