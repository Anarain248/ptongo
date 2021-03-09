import logo from '../arjun-logo.png'
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';
import Timer from './Timer';
import ExerciseListten from './ExerciseListten'


const Levelten = () => {
    const [exercisesten, setExerciseten] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/exercisesten`);
            const {exercisesten: fetchedExercise} = await res.json();
            setExerciseten(fetchedExercise)
        })()
    }, [])
    return (
        <div className="Homepage">

        <img src={logo}/>

        <Timer />

        {exercisesten && <ExerciseListten exercises={exercisesten}/>}
        </div>
    );
}

export default Levelten;
