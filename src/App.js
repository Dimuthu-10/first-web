import Namelist from "./components/namelist"
import './App.css';
import Navbar from "./components/navbar";
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Namelist />
    </React.Fragment>
  );
}

export default App;
