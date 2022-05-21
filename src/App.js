import logo from "./logo.svg";
import "./App.css";
import Main from "./components/mian-page/main";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./components/details/details";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />

          <Route path="/details/:dataindex/:index" component={Details} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
