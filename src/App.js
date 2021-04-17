import React, { useState } from 'react';
import './App.css';
import Home from './components/Home'
import Main from './components/Main/Main.js'

function App() {

const [ user, setUser ] = useState(false); // login / out here

  return (
    <div className="App">
      { !user ? 
      (
      <Home user={user} setUser={setUser}/> 
      )
      :
      <Main />
    
    }
    </div>
  );
}

export default App;