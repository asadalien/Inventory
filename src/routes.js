import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./pages/App";

const router = () => {
  return (
      <Router>
          <Switch>
              <Route path="/">
                  <App />
              </Route>
          </Switch>
      </Router>
  )
};
export default router;