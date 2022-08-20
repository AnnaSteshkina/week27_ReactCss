import React from 'react';
import './App.css';
import Rate from './components/rates.jsx';

function App() {
  return (
    <div className="App">
      <Rate className = "rate1"
      price = {300}
      speed = {10}
      details = "Объем включенного трафика неограничен"
      />
      <Rate className = "rate2"
      price = {450}
      speed = {50}
      details = "Объем включенного трафика неограничен"
      />
      <Rate className = "rate3"
      price = {550}
      speed = {100}
      details = "Объем включенного трафика неограничен"
      />
      <Rate className = "rate4"
      price = {1000}
      speed = {200}
      details = "Объем включенного трафика неограничен"
      />
    </div>
  );
}

export default App;
