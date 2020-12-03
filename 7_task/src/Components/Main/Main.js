import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import Blog from '../Posts/Blog';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Blog />
            </div>
        );
    }
}

export default Main;
