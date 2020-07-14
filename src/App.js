import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header'
import Home from "./Components/Home"
import Checkout from "./Components/Checkout";

function App() {
  return (
    <Router>
      <div className="app">
          <Switch>
            <Route path="/checkout">
            <Header/>
            <Checkout/>
            </Route>
            <Route path="/login">
            <h1>Login page </h1>
            </Route>
            {/*this is the default route */}
            <Route path="/">
                <Header/>
                <Home/>
                </Route>
          </Switch>
 
      </div>
    </Router>
  );
}

export default App;
