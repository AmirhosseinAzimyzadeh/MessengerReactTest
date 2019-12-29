import React from 'react';
import './App.css'
// components 
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (<div>
    <Header isConnected={true} />
    <Main />
    <Footer />
  </div>);
}

export default App;
