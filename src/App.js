import React, { useState } from 'react';
import './App.css';
import Home from './components/Home'
import Main from './components/Main/Main.js'

function App() {

const [ user, setUser ] = useState(true); // login / out here

  return (
    <div className="App">
      { !user ? 
      (
      <Home user={user} setUser={setUser} /> 
      )
      :
      // TO DO: set up if user is logged in:
      <Main setUser={setUser}/>
    
    }
    </div>
  );
}

export default App;