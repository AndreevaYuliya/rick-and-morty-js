import React from "react";

import { Typography } from "@mui/material";

import ArrowUpIcon from "../../assets/icons/ArrowUp";

import { SCROLL_TO_TOP_DURATION } from "./constants";
import { useScrollToTop } from "./hooks";
import { StyledIconButton } from "./styles";

const UpButton = () => {
  const { visible, scrollToTop } = useScrollToTop(
    SCROLL_TO_TOP_DURATION,
    ".MuiDataGrid-virtualScroller",
  );

  return (
    <StyledIconButton onClick={scrollToTop} visible={visible}>
      <ArrowUpIcon />

      <Typography variant="subtitle2">Up</Typography>
    </StyledIconButton>
  );
};

export default UpButton;

