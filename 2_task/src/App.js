import logo from './logo.svg';
import './App.css';
import Animal from './Animal component/Animal'

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Animal animalIndex = "0"/>
      <Animal  animalIndex = "1"/>
      <Animal animalIndex = "2"/>
    </div>
  );
}

export default App;
