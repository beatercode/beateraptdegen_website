import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import ThemeChanger from "./ThemeChanger";

const Layout = () => {
  return (
    <>
      <Navigation />
      <ThemeChanger />
      <Outlet />
    </>
  );
};

export default Layout;
