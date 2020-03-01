import React, { useState } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import NavContainer from "./components/NavBar/NavContainer"
import SignUp from "./components/Registration/SignUp"
import SignIn from "./components/Registration/SignIn"
import { Route } from "react-router-dom";
import AppContainer from './components/AppContainer'


function App() {
  

  return (
    <div>
      <NavContainer />
      <Route exact path="/" component={SignIn}/>
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/app" component={AppContainer} />
    </div>
  );
}

export default App;
