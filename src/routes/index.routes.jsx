export const HOME = "/";
export const SIGNUP = "/signup";
export const LOGIN = "/login";
export const DASHBOARD = "/dashboard";
export const LIVE = "/live";
export const LIVE_PARTICIPANT = "/live/:sid";
export const SIGNOUT = "/signout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Live from "../pages/Live/Live";
import LivePreview from "../pages/LivePreview/LivePreview";
import Login from "../pages/Login/Login";
import Signout from "../pages/Signout";
import Signup from "../pages/Signup/Signup";

export const routes = [
  {
    path: HOME,
    element: <Home />,
  },
  {
    path: SIGNUP,
    element: <Signup />,
  },
  {
    path: LOGIN,
    element: <Login />,
  },
  {
    path: DASHBOARD,
    element: <Dashboard />,
    children: [
      {
        path: LIVE,
        element: <LivePreview />,
      },
    ],
  },
  {
    path: LIVE_PARTICIPANT,
    element: <Live />,
  },
  {
    path: SIGNOUT,
    element: <Signout />,
  },
];
