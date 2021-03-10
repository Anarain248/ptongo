import logo from '../arjun-logo.png'
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';
import Timer from './Timer';
import ExerciseListfive from './ExerciseListfve';

const Levelfive = () => {
    const [exercisesfive, setExercisefive] = useState([]);

    const deleteHandle = (id) => {
        const newExercises = exercisesfive.filter(exercise => exercise.id !== id)
        setExercisefive(newExercises)
    }

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/exercisesfive/`);
            const {exercisesfive: fetchedExercise} = await res.json();
            setExercisefive(fetchedExercise)
        })()
    })
    return (
        <>
        <img className="logo" src={logo}/>
        <Timer />
        <div className="Homepage">





            {exercisesfive && <ExerciseListfive exercises={exercisesfive} deleteHandle={deleteHandle}/>}

        </div>
        </>
     );
}

export default Levelfive;
