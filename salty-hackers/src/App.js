import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import NavContainer from "./components/NavBar/NavContainer"
import SignUp from "./components/Registration/SignUp"
import SignIn from "./components/Registration/SignIn"
import { Route } from "react-router-dom";
import AppContainer from './components/AppContainer';
import PrivateRoute from './components/PrivateRoute';
import SweetContainer from './components/SweetContainer';
import About from './components/About/About';
import axios from 'axios';

function App() {
  
  const [ data, setData ] = useState([]);
  useEffect(() => {
    axios.get("https://salty-shnt1.herokuapp.com/")
    .then(res => {
      console.log(res)
      setData(...data, res.data);
    })
    .catch(err => (console.log(err)))
  }, [])

  console.log("dsdata", data)

  return (
    <div>
      <NavContainer />
      <Route exact path="/" component={SignIn}/>
      <Route exact path="/register" component={SignUp} />
      <PrivateRoute exact path="/app" component={AppContainer} />
      <PrivateRoute exact path="/sweet" component={SweetContainer} />
      <Route exact path="/about" component={About} />
    </div>
  );
}

export default App;
