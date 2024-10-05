import { JSX, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { MobileNav } from "../navigation/Mobile";
import { DesktopNav } from "../navigation/Desktop";
import { SignInDrawer } from "../auth/SignInDrawer";
import { SnackBar } from "./SnackBar";
import "../../styles/pages/layout.scss";

export const Layout = (): JSX.Element => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);


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
