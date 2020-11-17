import React, { Component } from 'react';
import Circle from './Components/Circle/Circle';
import GameOver from './Components/GameOver/GameOver';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class App extends Component {
    state = {
        rounds: 0,
        score: 0,
        current: 0,
        circles: [
            { id: 1, color: 'green' },
            { id: 2, color: 'blue' },
            { id: 3, color: 'red' },
            { id: 4, color: 'yellow' },
        ],
        showGameOver: false,
    };
    pace = 1500;
    timer = undefined;

    clickHandler = (id) => {
        console.log(`circle ${id} clicked`);

        if (this.state.current !== id) {
            this.stopHandler();
            return;
        }

        this.setState({
            score: this.state.score + 1,
            rounds: 0,
        });
    };

    nextCircle = () => {
        if (this.state.rounds >= 5) {
            this.stopHandler();
            return;
        }

        let nextActive = undefined;

        do {
            nextActive = getRndInteger(1, 4);
        } while (nextActive === this.state.current);

        this.setState({
            current: nextActive,
            rounds: this.state.rounds + 1,
        });

        this.pace *= 0.95;
        this.timer = setTimeout(this.nextCircle, this.pace);

        console.log(`Active circle is ${this.state.current}`);
    };

    startHandler = () => {
        this.nextCircle();
    };

    stopHandler = () => {
        clearTimeout(this.timer);

        this.setState({
            showGameOver: true,
        });
    };

    render() {
        const circles = this.state.circles.map((item) => {
            return (
                <Circle
                    key={item.id}
                    color={item.color}
                    click={() => this.clickHandler(item.id)}
                    active={this.state.current === item.id}
                />
            );
        });

        return (
            <div className="wrapper">
                <div className="game">
                    <h1>Speedor game</h1>
                    <p>Your score is: {this.state.score}</p>
                    <div>{circles}</div>
                    <button onClick={this.startHandler}>Start</button>
                    <button onClick={this.stopHandler}>End</button>
                    {this.state.showGameOver && <GameOver score={this.state.score} />}
                </div>
            </div>
        );
    }
}

export default App;
