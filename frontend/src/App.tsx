import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  };
  
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  };
  
  return (
    <div className ="grid-container">
        </div>
    
  );
}

export default App;
