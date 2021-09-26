import React, { FC, useCallback } from "react";
import { Icon, Switch } from ".";
import Theme from "../constants/themes";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { selectTheme, setTheme } from "../store/slices/settings";

interface Props {}

const ThemeSwitch: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const changeTheme = useCallback(
    (theme: Theme) => {
      dispatch(setTheme(theme));
    },
    [dispatch]
  );

  const toggleTheme = useCallback(
    (active) => {
      changeTheme(active ? Theme.DARK : Theme.LIGHT);
    },
    [changeTheme]
  );
  return (
    <div className="duo-row duo-center duo-theme-picker">
      <Icon
        className={theme === Theme.LIGHT ? "duo-icon-selected" : ""}
        onClick={() => toggleTheme(false)}
        name="light_mode"
      />
      <Switch onChange={toggleTheme} value={theme === Theme.DARK} />
      <Icon
        className={theme === Theme.DARK ? "duo-icon-selected" : ""}
        onClick={() => toggleTheme(true)}
        name="dark_mode"
      />
    </div>
  );
};

export default ThemeSwitch;
