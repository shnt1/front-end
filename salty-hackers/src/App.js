import React, { useState } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import NavContainer from "./components/NavBar/NavContainer"
import SignUp from "./components/Registration/SignUp"
import SignIn from "./components/Registration/SignIn"
function App() {
  const [ saltScore, setSaltScore ] = useState();

  return (
    <div>
      <NavContainer />
      <h1>Salty Hackers</h1>
      <SignIn />
    </div>
  );
}

export default App;
