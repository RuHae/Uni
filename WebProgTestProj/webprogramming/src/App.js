import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NewIng from "./addIng.js"

function App() {
  return (
    <div>
      <header>
          <title>
            Einkaufsliste
          </title>
          <h1>Einkaufsliste</h1>
          <div>
          <NewIng/>
          </div>
          
        </header>
    </div>      
  );
}

export default App;
