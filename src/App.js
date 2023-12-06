import './styles/App.css';
import Dice from './components/Dice';

function App() {
  return (
    <main className="dice-bg">
      <div className="dice-container">
          <Dice value = "1" />
          <Dice value = "1" />
          <Dice value = "1" />
          <Dice value = "1" />
          <Dice value = "1" />
          <Dice value = "1" />
          <Dice value = "1" />
          <Dice value = "1" />
          <Dice value = "1" />
          <Dice value = "1" />
      </div>
    </main>
  );
}

export default App;
