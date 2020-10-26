import React, { Component } from 'react';
import './Animal.css'

/* const Animal = (props) => {
    return(
        <div className = "card">
            <img src={props.imgSrc} alt="animalImage"/>
            <h2>{props.animalName}</h2>
            <button onClick={()=> window.alert(`Hello! I am ${props.animalName}. It is nice to meet you!`)}>Greet</button>
        </div>
    );
}; */

const animals = [{
    "animalName": "pig",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/61WdixjupoL._AC_SL1024_.jpg"
}, {
    "animalName": "bear",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/51FyMq6lJkL._AC_.jpg"
}, {
    "animalName": "duck",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/71LgxJzwFKL._SL1500_.jpg"
}]

class Animal extends React.Component {
    render() {

        return (<div className = "card">
            <img src={animals[this.props.animalIndex].imgSrc} alt="animalImage"/>
            <h2>{animals[this.props.animalIndex].animalName}</h2>
            <button onClick={()=> window.alert(`Hello! I am ${animals[this.props.animalIndex].animalName}. It is nice to meet you!`)}>Greet</button>
        </div>)
    }
}

export default Animal