import React from "react";

import ChildComponent from "../Props/ChildComponent/ChildComponent";
import { json } from "react-router-dom";

class LifecycleMethods extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            baseURL: 'https://api.openweathermap.org/data/2.5/weather',
            city: 'Indianapolis',
            apiKey: '215845391722468e52796e756f77c338',
            main: {},
            weather: [],
            time: null
        }
    }

    componentDidMount() {
        this.fetchInterval = setInterval(() => {
            fetch(`${this.state.baseURL}?q=${this.state.city}&units=imperial&appid=${this.state.apiKey}`)
            .then(response => response.json())
            .then(json => this.setState({
                main: json.main,
                weather: json.weather
            }))
            .catch(err => console.log(err))
        }, 15000)
    }

    render() {
        return (
            <div className="main">
                <div className="mainDiv" style={{textAlign: 'center'}}>
                    <ChildComponent/>
                </div>
            </div>
        )
    }
}

export default LifecycleMethods;