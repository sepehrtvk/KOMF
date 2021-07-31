import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import Profile from "./Components/Profile/Profile";
import Exam from "./Components/Exam/Exam";
import Error from "./Components/Error/Error";
import Quiz from "./Components/Quiz/Quiz";

import AuthContext from "./context/auth-context";
import { useContext } from "react";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Switch>
      {authCtx.isLoggedIn && (
        <Route path="/Profile" component={Profile} exact />
      )}
      {authCtx.isLoggedIn && <Route path="/Exam" component={Exam} />}
      <Route path="/Quiz" component={Quiz} />
      <Route path="/" component={Login} exact />
      <Route path="/Login" component={Login} />
      <Route path="/SignUp" component={SignUp} />
      <Route component={Error} />
    </Switch>
  );
}

export default App;
