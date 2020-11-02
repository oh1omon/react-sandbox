import React from "react";
import "./Animal.css";

const greetingText = (name) => {
  console.log(name);
  alert(`Hello, I am ${name}. It is nice to meet you!`);
};

const Animal = (props) => {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <img alt={props.name} src={props.img} />
      <button onClick={() => greetingText(props.name)}>Click me!</button>
    </div>
  );
};

export default Animal;