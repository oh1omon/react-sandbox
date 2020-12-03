import axios from 'axios';
import React, { Component } from 'react';

const params = {
    query: 'Helsinki',
    access_key: process.env.REACT_APP_API_KEY,
};

class Weather extends Component {
    state = {
        weather: {
            city: params.query,
            temperature: undefined,
        },
    };

    componentDidMount() {
        axios
            .get(
                `http//:api.openweathermap.org/data/2.5/weather?q=${params.query}&appid=${params.access_key}`
            )
            .then((response) => {
                return this.setState({
                    weather: {
                        temperature: Math.floor(response.data.main.temp - 273.15),
                    },
                });
            });
    }

    render() {
        return (
            <p>
                It feels like {this.state.weather.temperature} Celsius in {this.state.weather.city} right now
                :)
            </p>
        );
    }
}

export default Weather;
