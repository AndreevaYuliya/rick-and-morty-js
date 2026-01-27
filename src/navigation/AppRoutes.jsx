import React from "react";
import { Routes, Route } from "react-router";

import Home from "../pages/home";
import About from "../pages/about";
import Heroes from "../pages/heroes/heroes";
import HeroDetails from "../pages/heroes/heroDetails";
import NoPageFound from "../pages/noPageFound";

import { ROUTES } from "./constants";

const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.home} element={<Home />} />
    <Route path={ROUTES.about} element={<About />} />
    <Route path={ROUTES.heroes} element={<Heroes />}>
      <Route path={ROUTES.id} element={<HeroDetails />} />
    </Route>
    <Route path="*" element={<NoPageFound />} />
  </Routes>
);

export default AppRoutes;

