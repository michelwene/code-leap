import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState: UserState = JSON.parse(Cookies.get("user") || "{}");

type UserState = {
  user: string;
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (
      state: UserState,
      {
        payload,
      }: {
        payload: UserState;
      }
    ) => {
      Cookies.set("user", JSON.stringify(payload), {
        expires: 1,
      });
      return (state = payload);
    },
  },
});

export const { addUser } = UserSlice.actions;

export const selectUser = (state: any) => state.user;

export default UserSlice.reducer;
