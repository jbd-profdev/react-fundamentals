import React, {Component} from "react";

class ClockApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: this.getTimeString()
        }
    }

    getTimeString = () => {
        let date = new Date().toLocaleTimeString();
        return date;
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                time: this.getTimeString()
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return(
            <div>
                <h1 className="section-title">React Clock</h1>
                <p>{this.state.time}</p>
            </div>
        )
    }
}

export default ClockApp;