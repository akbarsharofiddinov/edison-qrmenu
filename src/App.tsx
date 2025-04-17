import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import { Home, Menu, SubCategories } from "./pages";
import { ToastContainer } from "react-toastify";
import { ToTopBtn } from "./components";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "menu/:category_id",
          element: <Menu />,
          children: [
            {
              path: ":subcategory_id",
              element: <SubCategories />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
      <ToTopBtn />
    </>
  );
};

export default App;
