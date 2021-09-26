import React, { FC } from "react";
import { useAppSelector } from "../hooks/redux";
import { selectTheme } from "../store/slices/settings";

interface Props {}

const ThemeProvider: FC<Props> = ({ children }) => {
  const theme = useAppSelector(selectTheme);
  return <div className={`app ${theme}`}>{children}</div>;
};

export default ThemeProvider;
