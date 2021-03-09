import logo from '../arjun-logo.png'
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';
import Timer from './Timer';
import ExerciseListseven from './ExerciseListseven';


const Levelseven = () => {
    const [exercisesseven, setExerciseseven] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/exercisesseven`);
            const {exercisesseven: fetchedExercise} = await res.json();
            setExerciseseven(fetchedExercise)
        })()
    }, [])
    return (
        <div className="Homepage">

        <img src={logo}/>

        <Timer />

        {exercisesseven && <ExerciseListseven exercises={exercisesseven}/>}
        </div>
    );
}

export default Levelseven;
