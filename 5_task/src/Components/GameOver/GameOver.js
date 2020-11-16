import React from 'react';
import './GameOver.css';

const closeHandler = () => {
    window.location.reload();
};

const GameOver = (props) => {
    return (
        <div className="overlay">
            <div className="gameover_box">
                <h2>Game over!</h2>
                <p>You are Pidor, thanks kiitos</p>
                <p>Your score was: {props.score}</p>
                <button onClick={closeHandler}>Close</button>
            </div>
        </div>
    );
};

export default GameOver;
