import BasicTimerApp from './BasicTimerApp';
import ClockApp from './ClockApp';
// import StopWatchApp from './StopWatchApp';

const TimePiecesApp = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <BasicTimerApp/>
                <ClockApp/>
            </div>
        </div>
    )
}

export default TimePiecesApp;