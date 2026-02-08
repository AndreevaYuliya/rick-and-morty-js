import React from "react";

import { IconButton as MuiIconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const IconButton = ({ visible, ...props }) => <MuiIconButton {...props} />;

export const StyledIconButton = styled(IconButton)(({ theme, visible }) => ({
  position: "fixed",
  right: 50,
  bottom: 150,
  display: "flex",
  flexDirection: "column",
  gap: 0,
  width: 50,
  height: 50,
  padding: 0,
  color: theme.palette.primary.main,
  borderRadius: "50%",
  boxShadow: "0 0 10px #000",
  backgroundColor: theme.palette.background.default,
  opacity: visible ? 1 : 0,
  pointerEvents: visible ? "auto" : "none",
  willChange: "transform",
  transform: visible ? "scale(1)" : "scale(0.7)",
  transition:
    "background-color 0.3s, color 0.3s, opacity 0.4s ease, transform 0.4s ease",
  zIndex: visible ? 1100 : "auto",
  animationDelay: visible ? "0.3s !important" : "0s",
  animation: visible ? "pulse 1.2s infinite linear" : "none",
  "& svg": {
    width: 20,
    height: 25,
    marginTop: 5,
  },
  "&:hover": {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light,
  },
  "@keyframes pulse": {
    "0%, 100%": {
      transform: "scale(1)",
    },
    "50%": {
      transform: "scale(1.1)",
    },
  },
}));

