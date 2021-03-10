import logo from '../arjun-logo.png'
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';
import Timer from './Timer';
import ExerciseListsix from './ExerciseListsix';


const Levelsix = () => {
    const [exercisessix, setExercisesix] = useState([]);

    const deleteHandle = (id) => {
        const newExercises = exercisessix.filter(exercise => exercise.id !== id)
        setExercisesix(newExercises)
    }

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/exercisessix`);
            const {exercisessix: fetchedExercise} = await res.json();
            setExercisesix(fetchedExercise)
        })()
    }, [])
    return (
        <>
        <img className="logo" src={logo}/>
        <Timer />
        <div className="Homepage">





        {exercisessix && <ExerciseListsix exercises={exercisessix} deleteHandle={deleteHandle}/>}
        </div>
        </>
    );
}

export default Levelsix;
