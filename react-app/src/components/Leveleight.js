import logo from '../arjun-logo.png'
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';
import ExerciseListeight from './ExerciseListeight';
import Timer from './Timer';

const Leveleight = () => {
    const [exerciseseight, setExerciseeight] = useState([]);


    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/exerciseseight`);
            const {exerciseseight: fetchedExxercise} = await res.json();
            setExerciseeight(fetchedExxercise)
        })()
    }, [])
    return (
        <div className="Homepage">

            <img src={logo}/>

            <Timer />

            {exerciseseight && <ExerciseListeight exercises={exerciseseight} />}
        </div>
     );
}

export default Leveleight;
