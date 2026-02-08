import React from "react";

import { Typography as MuiTypography, styled } from "@mui/material";

import { DRAWER_NAVIGATION_WIDTH } from "../../navigation/constants";

const Typography = ({ withBackground, ...rest }) => <MuiTypography {...rest} />;

export const StyledTypography = styled(Typography)(
  ({ theme, withBackground = false }) => ({
    position: "fixed",
    top: 0,
    left: DRAWER_NAVIGATION_WIDTH,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 58,
    boxSizing: "border-box",
    color: theme.palette.text.primary,
    backgroundColor: withBackground
      ? theme.palette.background.paper
      : theme.palette.background.transparent,
    cursor: "pointer",
    userSelect: "none",
    zIndex: 999,
  }),
);

