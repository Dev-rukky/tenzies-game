import './styles/App.css';
import Dice from './components/Dice';
import { useState } from 'react';
import { nanoid } from "nanoid";

function App() {

  const [dice, setDice] = useState(allNewDice());

  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  };

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice())
    }
    return newDice;
  };

  function rollDice() {
    setDice(oldDice => oldDice.map(dice => (
      dice.isHeld ?
        dice :
        generateNewDice()
    )))
  };

  function holdDice(id) {
    setDice(oldDice => oldDice.map(dice => {
      return dice.id === id ?
        { ...dice, isHeld: !dice.isHeld } :
        dice
    }))
  };

  const diceElement = dice.map(dice => (
    <Dice
      key={dice.id}
      value={dice.value}
      isHeld={dice.isHeld}
      holdDice={() => holdDice(dice.id)}
    />
  ));

  return (
    <main className="dice-bg">
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElement}
      </div>
      <button className="roll-btn" onClick={rollDice}>Roll</button>
    </main>
  );
};

export default App;
