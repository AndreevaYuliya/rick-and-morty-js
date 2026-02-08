import React from "react";

import { StyledTypography } from "./styles";

const PageHeader = ({ title, withBackground = false, onClick }) => {
  return (
    <StyledTypography
      variant="h4"
      component="h1"
      withBackground={withBackground}
      onClick={onClick}
    >
      {title}
    </StyledTypography>
  );
};

export default PageHeader;
