import React, {Component} from "react";

class BasicTimerApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsElapsed: 0,
        }
    }

    tick = () => {
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        })
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return(
            <div>
                <h1 className="section-title">Basic Timer</h1>
                <p>Seconds Elapsed: {this.state.secondsElapsed}</p>
            </div>
        )
    }
}

export default BasicTimerApp;