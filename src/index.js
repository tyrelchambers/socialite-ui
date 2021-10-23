import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Live from "./pages/Live/Live";
import LivePreview from "./pages/LivePreview/LivePreview";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import reportWebVitals from "./reportWebVitals";
import {
  DASHBOARD,
  HOME,
  LIVE,
  LIVE_PARTICIPANT,
  LOGIN,
  SIGNOUT,
  SIGNUP,
} from "./routes/index.routes";

const queryClient = new QueryClient();

const SignOut = () => {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries("currentUser");
  window.localStorage.removeItem("token");
  return <Redirect to="/" />;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route exact path={HOME} component={Home} />
          <Route exact path={SIGNUP} component={Signup} />
          <Route exact path={LOGIN} component={Login} />
          <Route exact path={DASHBOARD} component={Dashboard} />
          <Route exact path={LIVE} component={LivePreview} />
          <Route exact path={LIVE_PARTICIPANT} component={Live} />
          <Route exact path={SIGNOUT} component={SignOut} />
        </Switch>
      </BrowserRouter>
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
