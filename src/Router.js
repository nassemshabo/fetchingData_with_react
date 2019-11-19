import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ShowMore from "./components/ShowMore";
import App from "./App";

const Home = () => {
  return <App />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/showmore/:id" component={ShowMore} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
