import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavContainer from "./components/NavBar/NavContainer"
import SignUp from "./components/Registration/SignUp"
import SignIn from "./components/Registration/SignIn"
import { Route } from "react-router-dom";

function App() {
  const [ saltScore, setSaltScore ] = useState();

  return (
    <div>
      <NavContainer />
      <Route exact path="/" component={SignIn}/>
      <Route exact path="/register" component={SignUp} />
    </div>
  );
}

export default App;
