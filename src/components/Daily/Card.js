import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

    render() {
        let weatherText = this.props.day.weather[0].description;
        let weatherIcon;

        switch (weatherText) {
            case "light rain":
                weatherIcon = (<i className="fa fa-tint" aria-hidden="true"></i>);
                break;
            case "moderate rain":
                weatherIcon = (<i className="fa fa-tint" aria-hidden="true"></i>);
                break;
            case "clear sky":
                weatherIcon = (<i className="fa fa-sun-o" aria-hidden="true"></i>);
                break;
            case "snow":
                weatherIcon = (<i className="fa fa-asterisk" aria-hidden="true"></i>);
                break;
            case "light snow":
                weatherIcon = (<i className="fa fa-asterisk" aria-hidden="true"></i>);
                break;
            case "clouds":
                weatherIcon = (<i className="fa fa-cloud" aria-hidden="true"></i>);
                break;
            case "broken clouds":
                weatherIcon = (<i className="fa fa-cloud" aria-hidden="true"></i>);
                break;
            case "scattered clouds":
                weatherIcon = (<i className="fa fa-cloud" aria-hidden="true"></i>);
                break;
            case "few clouds":
                weatherIcon = (<i className="fa fa-cloud" aria-hidden="true"></i>);
                break;
            case "overcast clouds":
                weatherIcon = (<i className="fa fa-cloud" aria-hidden="true"></i>);
                break;
            default: weatherIcon = "undefined weather type";
        }
        const daytime = this.props.day.dt * 1000;
        const weekdayName = new Date(daytime).toLocaleString('en', { weekday: 'long' });
        return (
            <div className="card">
                <div>
                    <h3>{weekdayName}</h3>
                    <h2>{Math.round(Math.round(this.props.day.main.temp - 273))} C</h2>
                    <h3>{weatherIcon}</h3>
                </div>
            </div>
        )
    }
}

export default Card
