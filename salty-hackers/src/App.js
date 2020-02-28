import React, { useState } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import NavContainer from "./components/NavBar/NavContainer"

function App() {
  const [ saltScore, setSaltScore ] = useState();

  return (
    <div>
      <NavContainer />
      <h1>Salty Hackers</h1>
    </div>
  );
}

export default App;
