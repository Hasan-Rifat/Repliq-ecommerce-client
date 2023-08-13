import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  user: {
    email: string;
    role: string;
    token: string;
  };
}

const initialState: initialState = {
  user: {
    email: "",
    role: "",
    token: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
