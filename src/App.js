import React from 'react';
import './App.css';
import Rate from './components/rates.jsx';

function App() {
  return (
    <div className="App">
      <Rate
      color = "#ed665c"
      price = {300}
      speed = {10}
      details = "Объем включенного трафика неограничен"
      isHighlighted = {false}
      />
      <Rate
      color = "#00a8c9"
      price = {450}
      speed = {50}
      details = "Объем включенного трафика неограничен"
      isHighlighted = {false}
      />
      <Rate 
      color = "#00c94a"
      price = {550}
      speed = {100}
      details = "Объем включенного трафика неограничен"
      isHighlighted = {true}
      />
      <Rate 
      color = "#030000"
      price = {1000}
      speed = {200}
      details = "Объем включенного трафика неограничен"
      isHighlighted = {false}
      />
    </div>
  );
}

export default App;
