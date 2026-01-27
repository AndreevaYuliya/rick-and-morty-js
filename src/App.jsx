import React from "react";

import { BrowserRouter } from "react-router";

import AppRoutes from "./navigation/AppRoutes";
import DrawerNavigation from "./navigation/DrawerNavigation";
import PageContainer from "./layouts/PageContainer";
import ThemeProvider from "./theme/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <DrawerNavigation />

        <PageContainer>
          <AppRoutes />
        </PageContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

