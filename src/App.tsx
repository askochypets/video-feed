import React from 'react';
import Navbar from './Navbar';
import Feed from './Feed';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Navbar />
      <Feed />
    </div>
  );
};

export default App;
