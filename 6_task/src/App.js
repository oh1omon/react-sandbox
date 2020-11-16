import React, { Component } from 'react';
import Form from './Form/Form';
import View from './View/View';
import Popup from './Popup/Popup';
import './App.css';

class App extends Component {
    state = {
        firstname: '',
        lastname: '',
        phonenumber: '',
        message: '',
        role: '',
        showPopup: false,
    };

    valueHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.setState({ showPopup: true });
    };

    render() {
        return (
            <div className="app">
                <Form valueHandler={this.valueHandler} sub={this.submitHandler} />
                <View
                    firstname={this.state.firstname}
                    lastname={this.state.lastname}
                    phonenumber={this.state.phonenumber}
                    role={this.state.role}
                    message={this.state.message}
                />
                {this.state.showPopup && (
                    <Popup
                        firstname={this.state.firstname}
                        lastname={this.state.lastname}
                        phonenumber={this.state.phonenumber}
                        role={this.state.role}
                        message={this.state.message}
                    />
                )}
            </div>
        );
    }
}

export default App;
