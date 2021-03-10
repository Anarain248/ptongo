import logo from '../arjun-logo.png'
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';
import ExerciseListnine from './ExerciseListnine';
import Timer from './Timer';

const Levelnine = () => {

    const [exercisesnine, setExercisenine] = useState([]);

    const deleteHandle = (id) => {
        const newExercises = exercisesnine.filter(exercise => exercise.id !== id)
        setExercisenine(newExercises)
    }

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/exercisesnine`);
            const {exercisesnine: fetchedExxercise} = await res.json();
            setExercisenine(fetchedExxercise)
        })()
    }, [])
    return (
        <>
        <img className="logo" src={logo}/>
        <div className="Homepage">

          

            <Timer />

            {exercisesnine && <ExerciseListnine exercises={exercisesnine} deleteHandle={deleteHandle}/>}
        </div>
        </>
     );
}

export default Levelnine;
