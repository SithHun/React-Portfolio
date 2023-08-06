import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className='site'>
    <div className='site-content'>
    <Router>
      <div className="App">
        <Header />
        <Content />
      </div>
    </Router>
    </div>
        <Footer />
    </div>
  );
}

export default App;
