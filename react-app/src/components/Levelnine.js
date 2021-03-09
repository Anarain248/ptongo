import logo from '../arjun-logo.png'
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';
import ExerciseListnine from './ExerciseListnine';
import Timer from './Timer';

const Levelnine = () => {

    const [exercisesnine, setExercisenine] = useState([]);


    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/exercisesnine`);
            const {exercisesnine: fetchedExxercise} = await res.json();
            setExercisenine(fetchedExxercise)
        })()
    }, [])
    return (
        <div className="Homepage">

            <img src={logo}/>

            <Timer />

            {exercisesnine && <ExerciseListnine exercises={exercisesnine} />}
        </div>
     );
}

export default Levelnine;
