import logo from '../arjun-logo.png'
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';
import ExerciseList from './ExerciseList';
import picture from '../fitness.jpg';
import FoodList from './FoodList';


const Home = () => {
    const [err, setErr] = useState('');
    const [exercises, setExercises] = useState('');
    const [foods, setFoods] = useState('');


    const deleteHandle = (id) => {
        const newExercises = exercises.filter(exercise => exercise.id !== id)
        setExercises(newExercises)
    }

    const deleteHandleFood = (id) => {
        const newFoods = foods.filter(food => food.id !== id)
        setFoods(newFoods)
    }

    useEffect(() => {
        fetch('http://localhost:5000/exercises')
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setExercises(data)
                setErr(null)
            })
            .catch(err => {
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:8000/foods')
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setFoods(data)
                setErr(null)
            })
            .catch(err => {
            })
    }, [])


    return (
        <div className="Homepage">
            {err && <div>{err}</div>}
            <img src={logo}/>

            <h3>Your Exercises!</h3>
         {exercises && <ExerciseList exercises={exercises} deleteHandle={deleteHandle}/>} <img className="pic"src={picture}/>
         <h3>Your Foods!</h3>
         {foods && <FoodList foods={foods} deleteHandleFood={deleteHandleFood}/>}
        </div>

    );
}

export default Home;
