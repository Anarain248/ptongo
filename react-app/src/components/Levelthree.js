import logo from '../arjun-logo.png'
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';
import ExerciseListthree from './ExerciseListthree';
import Timer from './Timer';

const Levelthree = () => {
    const [er, setEr] = useState([]);
    const [exercisesthree, setExercisethree] = useState([]);

    const deleteHandle = (id) => {
        const newExercises = exercisesthree.filter(exercise => exercise.id !== id)
        setExercisethree(newExercises)
    }

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/exercisesthree`);
            const {exercisesthree: fetchedExxercise} = await res.json();
            setExercisethree(fetchedExxercise)
        })()
    }, [])
    return (
        <>
        <img className="logo" src={logo}/>
            <div className="Homepage">
            {/* {err && <div>{err}</div>} */}
            {/* <img className="fit3" src={fit3}/>
            <img className="fit4" src={fit4}/> */}



            <Timer />

            {exercisesthree && <ExerciseListthree exercises={exercisesthree} deleteHandle={deleteHandle}/>}
        </div>
        </>
     );
}

export default Levelthree;
