import Theme from "@/src/constants/themes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface SettingsState {
  theme: Theme;
}

const initialState: SettingsState = {
  theme: Theme.LIGHT,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = settingsSlice.actions;
export const selectTheme = (state: RootState) => state.settings.theme;

export default settingsSlice.reducer;
