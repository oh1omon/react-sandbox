import logo from './logo.svg';
import './App.css';
import Animal from './Animal component/Animal'

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Animal imgSrc = "https://images-na.ssl-images-amazon.com/images/I/61WdixjupoL._AC_SL1024_.jpg" animalName = "Pig"/>
      <Animal imgSrc = "https://images-na.ssl-images-amazon.com/images/I/51FyMq6lJkL._AC_.jpg" animalName = "Bear"/>
      <Animal imgSrc = "https://images-na.ssl-images-amazon.com/images/I/71LgxJzwFKL._SL1500_.jpg" animalName = "Duck"/>
    </div>
  );
}

export default App;
