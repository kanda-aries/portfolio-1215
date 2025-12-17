import { createBrowserRouter } from "react-router-dom";
import DefaultTemplate from "./components/template/Default/index";

import Home from "./pages/Home/index";
import NotFound from "./pages/Notfound/index";

export const router = createBrowserRouter([
  {
    element: <DefaultTemplate />,
    children: [
      { path: "/", element: <Home /> },
      { path: "*", element: <NotFound /> }
    ],
  },
]);
