import React from "react";
import "./App.css";
import store from "./store";
import {  Route,Switch } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "./routes";;

function App() {
  return (
      <div>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </div>
  );
}

export default App;
