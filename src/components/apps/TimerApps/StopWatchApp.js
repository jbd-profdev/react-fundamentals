import React, {Component} from "react";

class StopWatchApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerOn: false, /* 1 */
            timerStart: 0, /* 2 */
            time: 0, /* 3 */
            laps: [] /* 4 */
        }
    }

    startTimer = () => {
        console.log(this.state.time);
        console.log(this.state.timerStart);
        console.log(Date.now());
        this.setState({
            timerOn: true,
            timerStart: Date.now() - this.state.time
        })
        this.time = setInterval(() => {
            this.setState({
                time: Date.now() - this.state.timerStart
            })
        }, 10)
    };

    stopTimer = () => {
        console.log(this.state.time);
        console.log(Date.now());
        console.log(this.state.timerStart);
        this.setState({
            timerOn: false
        })
        clearInterval(this.time);
    };

    lap = () => {
        this.setState({
            laps: [...this.state.laps, this.state.time]
        })
    }

    resetTimer = () => {
        this.setState({
            timerStart: 0,
            time: 0, 
            laps: []
        })
    }

    render() {

        const {time} = this.state;
        let centiseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
        let hours = ("0" + (Math.floor(time / 3600000))).slice(-2);

        return(
            <div>
                <h1 className="section-title">React Stopwatch</h1>
                <div>
                    {hours} : {minutes} : {seconds} : {centiseconds}
                </div>
                {
                    !this.state.timerOn && this.state.time === 0 && (
                        <div>
                            <button onClick={this.startTimer}>Start</button>
                        </div>
                    )
                }
                {
                    this.state.timerOn && (
                        <div>
                            <button onClick={this.stopTimer}>Stop</button>
                            <button onClick={this.lap}>Lap</button>
                        </div>
                    )
                }
                {
                    !this.state.timerOn && this.state.time > 0 && (
                        <div>
                            <button onClick={this.startTimer}>Resume</button>
                            <button onClick={this.resetTimer}>Reset</button>
                        </div>
                    )
                }
                {
                    this.state.laps.map((time) => {
                        let centiseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
                        let seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
                        let minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
                        let hours = ("0" + (Math.floor(time / 3600000))).slice(-2);

                        return (
                            <p>
                                {hours} : {minutes} : {seconds} : {centiseconds}
                            </p>
                        );
                    })
                }
            </div>
        )
    }
}

export default StopWatchApp;