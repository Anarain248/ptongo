import logo from '../arjun-logo.png'
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';
import ExerciseListfour from './ExerciseListfour';
import Timer from './Timer';

const Levelfour = () => {
    const [er, setEr] = useState([]);
    const [exercisesfour, setExercisefour] = useState([]);

    const deleteHandle = (id) => {
        const newExercises = exercisesfour.filter(exercise => exercise.id !== id)
        setExercisefour(newExercises)
    }

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/exercisesfour`);
            const {exercisesfour: fetchedExxercise} = await res.json();
            setExercisefour(fetchedExxercise)
        })()
    }, [])
    return (
        <div className="Homepage">

            <img src={logo}/>

            <Timer />

            {exercisesfour && <ExerciseListfour exercises={exercisesfour} deleteHandle={deleteHandle}/>}
        </div>
     );
}

export default Levelfour;
