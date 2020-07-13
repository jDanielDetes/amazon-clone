import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
          <Switch>
            <Route path="/checkout">
                <h1>checkout</h1>
            </Route>
            <Route path="/login">
            <h1>Login page </h1>
            </Route>
            {/*this is the default route */}
            <Route path="/">
                <h1>Home page</h1>
                </Route>
          </Switch>
 
      </div>
    </Router>
  );
}

export default App;
