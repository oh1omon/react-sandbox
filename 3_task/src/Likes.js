import './App.css';
import './Likes.css';
import React, { Component } from 'react';

class Likes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: 0,
			class: 'basic odd',
			date: new Date(),
		};
		this.handleAdding = this.handleAdding.bind(this);
		this.handleDecreasing = this.handleDecreasing.bind(this);
		this.handleResetting = this.handleResetting.bind(this);
		this.isEvenOrOdd = this.isEvenOrOdd.bind(this);
	}

	handleAdding() {
		this.setState((state) => {
			return { likes: (state.likes += 1) };
		});
		this.isEvenOrOdd();
	}

	handleDecreasing() {
		if (this.state.likes > 0) {
			this.setState((state) => {
				return { likes: (state.likes -= 1) };
			});
		}
		this.isEvenOrOdd();
	}

	handleResetting() {
		this.setState(() => {
			return { likes: 0 };
		});
		this.isEvenOrOdd();
	}

	isEvenOrOdd() {
		if (this.state.likes % 2 === 0 || this.state.likes === 0) {
			this.setState(() => {
				return { class: 'basic even' };
			});
		} else {
			this.setState(() => {
				return { class: 'basic odd' };
			});
		}
	}

	render() {
		return (
			<div className={this.state.class}>
				<header>
					<h2>Task 2: Likes</h2>
					<p>
						Date:{' '}
						{`${this.state.date.getDate()}/${this.state.date.getMonth()}/${this.state.date.getFullYear()}`}
					</p>
				</header>
				<main>
					<h1>Total likes: {this.state.likes}</h1>
					<button onClick={this.handleAdding}>Add Like</button>
					<button onClick={this.handleDecreasing}>Delete Like</button>
					<button onClick={this.handleResetting}>Reset Likes</button>
				</main>
				<footer>
					<h3>Arteemi Zagaroovi ©</h3>
				</footer>
			</div>
		);
	}
}

export default Likes;
