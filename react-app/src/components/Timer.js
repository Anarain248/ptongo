import {useState, useEffect} from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Button from '@material-ui/core/Button';
import { useStopwatch } from 'react-timer-hook';
import {Link} from 'react-router-dom';

const Timer = ({expiryTimestamp}) => {
    const {
        hours,
        seconds,
        minutes,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: false })
    return (
        <div className="timer">
            <h2> <AccessTimeIcon />Workout Timer</h2>
            <p>Goal Time: 1 hour</p>
            <div style={{fontSize: '50px'}}>
             <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>

            <Button onClick={start} variant="outlined" color="primary">Start</Button>

            <Button onClick={pause} variant="outlined" color="primary">Pause</Button>

            <Button onClick={reset} variant="outlined" color="primary" >Reset</Button>

        </div>
    );
}

export default Timer;
