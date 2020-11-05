import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
    constructor(props){
        super(props)
        this.state = {
            votes: 0,
        }
        this.votesAdding = this.votesAdding.bind(this);
    }

    votesAdding() {
        this.setState((state) => {
            return{votes: state.votes += 1}
        })
    }

    render() {
        return (
            <div className="article">
                <img src="https://www.whitezone.fi/wp-content/uploads/sites/22/2020/06/business-college-helsinki-rakennus-1.jpg" alt="funny meme image"/>
                <div className="text-container">
                    <h1>Lorem, ipsum dolor sit amet</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magni nam facilis id distinctio eum aliquid praesentium eligendi asperiores odit.</p>
                    <p><span className="fw600">{this.state.votes}</span> people voted for this article</p>
                    <button onClick={this.votesAdding}>Vote!</button>
                </div>
            </div>
        );
    }
}

export default Article;
