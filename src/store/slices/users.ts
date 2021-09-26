import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface UsersState {
  authUser: AuthUser | null;
}

const initialState: UsersState = {
  authUser: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthUser | null>) => {
      state.authUser = action.payload;
    },
  },
});

export const { setUser } = usersSlice.actions;
export const selectAuthUser = (state: RootState) => state.users.authUser;

export default usersSlice.reducer;
