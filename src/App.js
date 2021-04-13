import React, { useState } from 'react';
import './App.css';
import Home from './components/Home'
import Main from './components/Main'

function App() {

const [ user, setUser ] = useState(null);

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
