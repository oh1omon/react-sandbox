import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import Blog from '../Posts/Blog';
import Animals from '../Animals/Animals';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/animals">Animals</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/blog">
                        <div className="main">
                            <Blog />
                        </div>
                    </Route>
                    <Route path="/animals">
                        <div className="main">
                            <Animals />
                        </div>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Main;
