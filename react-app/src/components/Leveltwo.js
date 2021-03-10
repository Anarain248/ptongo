import logo from '../arjun-logo.png'
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';
import ExerciseListtwo from './ExerciseListtwo';
import Timer from './Timer';

const Leveltwo = () => {
   const [error, setError] = useState([]);
   const [exercisestwo, setExercisetwo] = useState([]);

   const deleteHandle = (id) => {
       const newExercise = exercisestwo.filter(exercise => exercise.id !== id)
       setExercisetwo(newExercise)
   }
    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/exercisestwo/`);
            console.log(res)
            const {exercisestwo: fetchedExercise} = await res.json();
            setExercisetwo(fetchedExercise)
        })();
    }, []);

    return (
        <>
        <img className="logo" src={logo}/>
        <Timer />
        <div className="Homepage">
            {/* {err && <div>{err}</div>} */}
            {/* <img className="fit3" src={fit3}/>
            <img className="fit4" src={fit4}/> */}




            {exercisestwo && <ExerciseListtwo exercises={exercisestwo} deleteHandle={deleteHandle}/>}

        </div>
        </>
     );
}

export default Leveltwo;
