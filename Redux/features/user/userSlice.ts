import { IUserState } from "@/shared/interface/interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IUserState = {
  user: {
    email: "",
    role: "",
    token: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
