import { Outlet } from "@tanstack/react-router";
import  Navbar  from "./componens/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export { App };
