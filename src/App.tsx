import React from 'react';
import './App.css';
import BlockchainInfo from './component/contractData';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Concordium Node API</h1>
        <BlockchainInfo />
      </header>
    </div>
  );
};

export default App;
