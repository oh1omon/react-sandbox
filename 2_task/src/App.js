import './App.css';
import Animal from './Animal component/Animal'

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [{
        "id": "0",
        "name": "pig",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61WdixjupoL._AC_SL1024_.jpg"
      }, {
        "id": "1",
        "name": "bear",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51FyMq6lJkL._AC_.jpg"
      }, {
        "id": "2",
        "name": "duck",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71LgxJzwFKL._SL1500_.jpg"
      }]
    }
  }

  render() {
      const animalsList= this.state.animals.map((animal) => {
          return <Animal key={animal.id} name={animal.name} img={animal.img} />;
      });
      return <div className="cards"> {animalsList} </div>;
  }
}

export default App;

