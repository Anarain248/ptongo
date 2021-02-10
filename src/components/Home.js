import logo from '../arjun-logo.png'
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';
import ExerciseList from './ExerciseList';
import picture from '../fitness.jpg';


const Home = () => {
    const [err, setErr] = useState(null)
    const [exercises, setExercises] = useState(null)

    const deleteHandle = (id) => {
        const newExercises = exercises.filter(exercise => exercise.id !== id)
        setExercises(newExercises)
    }
    useEffect(() => {
        fetch('http://localhost:5000/exercises')
            .then(res => {
                if (!res.ok) {
                    throw Error('error')
                }
                return res.json()
            })
            .then((data) => {
                setExercises(data)
                setErr(null)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])


    return (
        <div className="Homepage">
            {err && <div>{err}</div>}
            <img src={logo}/>

            <h3>Learn about Exercises!</h3>
         {exercises && <ExerciseList exercises={exercises} deleteHandle={deleteHandle}/>} <img className="pic"src={picture}/>
        </div>

    );
}

export default Home;
