import React, { useState, useEffect } from "react";
import NavContainer from "./components/NavBar/NavContainer";
import SignUp from "./components/Registration/SignUp";
import SignIn from "./components/Registration/SignIn";
import { Route } from "react-router-dom";
import AppContainer from "./components/AppContainer";
import PrivateRoute from "./components/PrivateRoute";
import SweetContainer from "./components/SweetContainer";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import axios from "axios";

function App() {
  

  return (
    <div>
      <NavContainer />
      <Route exact path="/" component={SignIn} />
      <Route exact path="/register" component={SignUp} />
      <PrivateRoute exact path="/app" component={AppContainer} />
      <PrivateRoute exact path="/sweet" component={SweetContainer} />
      <Route exact path="/about" component={About} />
      <Footer />
    </div>
  );
}

export default App;
