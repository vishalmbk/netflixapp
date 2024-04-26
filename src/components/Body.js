import React from "react";
import Login from "./Login";
import Browes from "./Browes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browes",
      element: <Browes />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
