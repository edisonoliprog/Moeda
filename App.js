import React from 'react';
import './App.css';
import InvoicePage from './pages/invoice';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InvoicePage
          name="Edison"
          sobreNome="Lourenço"
          skills={["javascript", "node", "REACT", "backend"]}
          />
      </header>
    </div>
  );
}

export default App;
