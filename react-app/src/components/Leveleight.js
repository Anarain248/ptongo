import logo from '../arjun-logo.png'
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';
import ExerciseListeight from './ExerciseListeight';
import Timer from './Timer';

const Leveleight = () => {
    const [exerciseseight, setExerciseeight] = useState([]);


    const deleteHandle = (id) => {
        const newExercises = exerciseseight.filter(exercise => exercise.id !== id)
        setExerciseeight(newExercises)
    }

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/exerciseseight/`);
            const {exerciseseight: fetchedExxercise} = await res.json();
            setExerciseeight(fetchedExxercise)
        })()
    }, [])
    return (
        <>
        <img className="logo" src={logo}/>
        <Timer />
        <div className="Homepage">



            {exerciseseight && <ExerciseListeight exercises={exerciseseight} deleteHandle={deleteHandle}/>}
        </div>
        </>
     );
}

export default Leveleight;
