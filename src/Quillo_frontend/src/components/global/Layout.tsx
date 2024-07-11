import { JSX } from "react";
import { Outlet } from "react-router-dom";
import { MobileNav } from "../navigation/Mobile";
import { DesktopNav } from "../navigation/Desktop";
import { SignInDrawer } from "../auth/SignInDrawer";
import { SnackBar } from "./SnackBar";
import "../../styles/pages/layout.scss";

export const Layout = (): JSX.Element => {
  return (
    <>
      <MobileNav />
      <DesktopNav />

      <main id="layout_main">
        <Outlet />

        <SignInDrawer />
      </main>

      <SnackBar />
    </>
  );
};
