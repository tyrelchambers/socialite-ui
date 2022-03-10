import "./index.css";

import { Outlet, ReactLocation, Router } from "react-location";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";

import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { routes } from "./routes/index.routes";

const queryClient = new QueryClient();
const location = new ReactLocation();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router location={location} routes={routes}>
        <Outlet />
      </Router>
    </QueryClientProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
