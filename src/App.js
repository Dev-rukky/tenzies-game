import './styles/App.css';
import Dice from './components/Dice';
import { useState } from 'react';

function App() {

  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6), isHeld: false
      })
    }
    return newDice;
  };

  function rollDice() {
    setDice(allNewDice())
  }

  const diceElement = dice.map(dice => (
    <Dice
      value={dice.value}
      isHeld={dice.isHeld}
    />
  ))

  return (
    <main className="dice-bg">
      <div className="dice-container">
        {diceElement}
      </div>
      <button className="roll-btn" onClick={rollDice}>Roll</button>
    </main>
  );
};

export default App;
