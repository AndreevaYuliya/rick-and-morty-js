import React, { createContext, useEffect, useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

import { loadValue, saveValue } from "../utils/storage";

import { lightTheme, darkTheme } from "./index";
import { DEFAULT_TRANSITION_DURATION } from "./constants";

export const ThemeContext = createContext({
  mode: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    return loadValue("themeMode") === "dark" ? "dark" : "light";
  });

  const muiTheme = mode === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    if (typeof window !== "undefined") {
      saveValue("themeMode", mode);
    }
  }, [mode]);

  const toggleTheme = () => {
    const isLight = mode === "light";

    document.body.style.setProperty(
      "--bubble-scale-start",
      isLight ? "0" : "80",
    );
    document.body.style.setProperty("--bubble-scale-end", isLight ? "80" : "0");
    document.body.classList.add("theme-switching");

    setMode((prev) => (prev === "light" ? "dark" : "light"));

    setTimeout(
      () => document.body.classList.remove("theme-switching"),
      DEFAULT_TRANSITION_DURATION,
    );
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

