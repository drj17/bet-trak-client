import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrentUser {
  email: string;
  id: string;
}
interface CurrentUserPayload {
  email: string;
  id: string;
}

type profileState = {
  token: string | null;
} & CurrentUser;

let initialState: profileState = {
  email: "",
  id: "",
  token: null
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<CurrentUser>) {
      const { email, id } = action.payload;
      state.email = email;
      state.id = id;
    }
  }
});

export const { setUser } = profileSlice.actions;

export default profileSlice.reducer;
