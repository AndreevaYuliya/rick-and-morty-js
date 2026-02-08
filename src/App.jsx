import React from "react";

import { BrowserRouter } from "react-router";

import AppRoutes from "./navigation/AppRoutes";
import DrawerNavigation from "./navigation/DrawerNavigation";
import PageContainer from "./layouts/PageContainer";
import ThemeProvider from "./theme/ThemeProvider";
import { Box } from "@mui/material";
import { ScrollLockProvider, useScrollLock } from "./context/ScrollLockContext";

const App = () => {
  const { isLocked } = useScrollLock();
  return (
    <ThemeProvider>
      <ScrollLockProvider>
        <BrowserRouter>
          <Box className={isLocked ? "app app--locked" : "app"}>
            <DrawerNavigation />

            <PageContainer>
              <AppRoutes />
            </PageContainer>
          </Box>
        </BrowserRouter>
      </ScrollLockProvider>
    </ThemeProvider>
  );
};

export default App;
