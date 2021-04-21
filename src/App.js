import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavTab from './components/NavTab';


function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello this is Ryan
        </p>
        
      </header>
      <NavTab />
      <Footer />
    </div>
  );
}

export default App;
