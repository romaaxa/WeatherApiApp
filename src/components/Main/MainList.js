import React, { Component } from 'react';
import Card from '../Daily/Card';
import './MLStyles.css'

let cityName = prompt("Your city: ", "Grodno")
class MainList extends Component {

    state = {
        days: [],
        value: ''
    }

    componentDidMount = async () => {
        const API_KEY = `798b731ccb60ffe52a17008f2a8c22ac`;

        const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;

        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                switch (cityName) {
                    case (!cityName):
                    case "":
                        alert("Empty cityName, try again.");
                        //cityName = prompt("Your city: ", "Grodno");
                        window.location.reload();
                        break;
                    case (cityName): break;
                    default: alert("Incorrect cityName. Value is chosen by default: Boston");
                        //cityName = "Boston";
                        window.location.reload();
                        break;
                }
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("9:00:00"))
                this.setState({ days: dailyData })
            })
    }

    reloadfunc = () => {
        window.location.reload();
    }
    formatCards = () => {
        return this.state.days.map((day, index) =>
            <Card day={day} key={index}
            />)
    }
    render() {
        return (
            <div>
                <div>
                    <div className="headText">
                        <h1 className="nameAppcomp">Weather API App</h1>
                        <h2 onClick={this.reloadfunc} className="underlined">{cityName}</h2>
                    </div>
                    <div className="cardinfo">
                        {this.formatCards()}
                    </div>
                </div>
            </div>
        )
    }
}

export default MainList
