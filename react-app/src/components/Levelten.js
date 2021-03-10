import logo from '../arjun-logo.png'
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';
import Timer from './Timer';
import ExerciseListten from './ExerciseListten'


const Levelten = () => {
    const [exercisesten, setExerciseten] = useState([]);

    const deleteHandle = (id) => {
        const newExercises = exercisesten.filter(exercise => exercise.id !== id)
        setExerciseten(newExercises)
    }

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/exercisesten/`);
            const {exercisesten: fetchedExercise} = await res.json();
            setExerciseten(fetchedExercise)
        })()
    }, [])
    return (
        <>
        <img className="logo" src={logo}/>
        <Timer />
        <div className="Homepage">



        {exercisesten && <ExerciseListten exercises={exercisesten} deleteHandle={deleteHandle}/>}
        </div>
        </>
    );
}

export default Levelten;
