import { JSX } from "react";
import { Outlet } from "react-router-dom";
import { MobileNav } from "../navigation/Mobile";
import { DesktopNav } from "../navigation/Desktop";
import "../../styles/pages/layout.scss";

export const Layout = (): JSX.Element => {
  return (
    <>
      <MobileNav />
      <DesktopNav />

      <main id="layout_main">
        <Outlet />
      </main>
    </>
  );
};
