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
      <Home user={user} setUser={setUser}/> 
      )
      :
      <Main />
    
    }
    </div>
  );
}

export default App;

// https://react-multi-carousel.vercel.app/

/* 
https://www.themoviedb.org/

/t/p/w600_and_h900_bestv2    [static?]

/qRhDgHAMNz4WfgEDYXbnjQhjvxr.jpg  [api]

*/