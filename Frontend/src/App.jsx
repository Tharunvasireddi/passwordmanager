import { Outlet } from "@tanstack/react-router";

const App = () => {
  return (
    <>
      <div className="bg-amber-600  min-h-40 w-full "></div>
      hi hello this passowrd manager
      <Outlet />
    </>
  );
};

export { App };
