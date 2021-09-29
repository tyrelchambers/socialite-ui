import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Live from "./pages/Live/Live";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import reportWebVitals from "./reportWebVitals";
import { DASHBOARD, HOME, LIVE, LOGIN, SIGNUP } from "./routes/index.routes";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route exact path={HOME} component={Home} />
          <Route exact path={SIGNUP} component={Signup} />
          <Route exact path={LOGIN} component={Login} />
          <Route exact path={DASHBOARD} component={Dashboard} />
          <Route exact path={LIVE} component={Live} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
