import React, { useState } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import NavContainer from "./components/NavBar/NavContainer"
import SignUp from "./components/Registration/SignUp"
import SignIn from "./components/Registration/SignIn"
import { Route } from "react-router-dom";
import AppContainer from './components/AppContainer'
import SweetContainer from './components/SweetContainer'

function App() {
  
  

  return (
    <div>
      <NavContainer />
      <Route exact path="/" component={SignIn}/>
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/app" component={AppContainer} />
      <Route exact path="/sweet" component={SweetContainer} />
    </div>
  );
}

export default App;
