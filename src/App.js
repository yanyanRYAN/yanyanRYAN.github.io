import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavTab from './components/NavTab';
import SimpleContainer from './components/SimpleContainer'
import Container from '@material-ui/core/Container';
import { Paper, Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Container maxWidth={false} >
        
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="h2">
          
            Ryan Ecarma
          
          </Typography>
          
        </header>
        <NavTab />
        <Footer />
        
      </Container>
    </div>
  );
}

export default App;
