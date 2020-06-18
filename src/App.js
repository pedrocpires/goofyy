import React from 'react';
import './styles/global.css'

import Header from './components/header'
import Portfolioconteiner from './components/portfolioconteiner';

function App() {
  return (
    <div className="App">
      <Header/>
      <Portfolioconteiner />
    </div>
  );
}

export default App;
