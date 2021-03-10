import logo from '../arjun-logo.png'
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';
import Timer from './Timer';
import ExerciseListseven from './ExerciseListseven';


const Levelseven = () => {
    const [exercisesseven, setExerciseseven] = useState([]);

    const deleteHandle = (id) => {
        const newExercises = exercisesseven.filter(exercise => exercise.id !== id)
        setExerciseseven(newExercises)
    }
    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/exercisesseven`);
            const {exercisesseven: fetchedExercise} = await res.json();
            setExerciseseven(fetchedExercise)
        })()
    }, [])
    return (
        <>
        <img className="logo" src={logo}/>
        <div className="Homepage">



        <Timer />

        {exercisesseven && <ExerciseListseven exercises={exercisesseven} deleteHandle={deleteHandle}/>}
        </div>
        </>
    );
}

export default Levelseven;
