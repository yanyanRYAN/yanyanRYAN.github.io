import React from 'react';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavTab from './components/NavTab';


function App() {
  
  

  return (
    <div >
        
        
        <div className="App">
          
            <Header appHeaderStyle="App-header" appHeaderTextSTyle="Header-text" />
            <NavTab />
          
        <div style={{position: "absolute", bottom: 0, width: "100%"}}>
        <Footer />
        </div>
        </div>
        
    </div>
  );
}

export default App;
