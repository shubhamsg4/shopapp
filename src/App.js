import React, { Fragment } from "react";
import "./App.css";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./components/home/HomePage"
import BrandPage from "./components/brand/BrandPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path="/" component={HomePage} />
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/brand" component={BrandPage} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
