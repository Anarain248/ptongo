import logo from '../arjun-logo.png'
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';
import ExerciseListthree from './ExerciseListthree';
import Timer from './Timer';
import ExerciseListsix from './ExerciseListsix';


const Levelsix = () => {
    const [exercisessix, setExercisesix] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/exercisessix`);
            const {exercisessix: fetchedExercise} = await res.json();
            setExercisesix(fetchedExercise)
        })()
    }, [])
    return (
        <div className="Homepage">

        <img src={logo}/>

        <Timer />

        {exercisessix && <ExerciseListsix exercises={exercisessix}/>}
        </div>
    );
}

export default Levelsix;
