import logo from '../arjun-logo.png'
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';
import ExerciseList from './ExerciseList';
import picture from '../fitness.jpg';
import FoodList from './FoodList';
import foodpic from '../food.jpg'
import fit2 from '../fit2.jpg';
import fit3 from '../fit3.jpg';
import fit4 from '../fit4.jpg';
import food3 from '../food3.jpg';
import food4 from '../food4.jpg';
import food5 from '../food5.jpg';


const Home = () => {
    const [err, setErr] = useState([]);
    const [exercises, setExercises] = useState([]);
    const [foods, setFoods] = useState([]);


    const deleteHandle = (id) => {
        const newExercises = exercises.filter(exercise => exercise.id !== id)
        setExercises(newExercises)
    }

    const deleteHandleFood = (id) => {
        const newFoods = foods.filter(food => food.id !== id)
        setFoods(newFoods)
    }

    // useEffect(() => {
    //     fetch('/api/exercises')
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then((data) => {
    //             setExercises(data)
    //             console.log(data)
    //             setErr(null)
    //         })
    //         .catch(err => {
    //         })
    // }, [])

    useEffect(() => {

        (async () => {
          const response = await fetch(`/api/exercises`);
          const {exercises: fetchedExercises} = await response.json();
          setExercises(fetchedExercises);
        })();
      }, []);

      useEffect(() => {

        (async () => {
          const response = await fetch(`/api/foods`);
          const {foods: fetchedFoods} = await response.json();
          setFoods(fetchedFoods);
        })();
      }, []);

    // useEffect(() => {
    //     fetch('/api/foods')
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then((data) => {
    //             setFoods(data)
    //             setErr(null)
    //         })
    //         .catch(err => {
    //         })
    // }, [])


    return (
        <div className="Homepage">
            {err && <div>{err}</div>}
            <img className="fit3" src={fit3}/>
            <img className="fit4" src={fit4}/>

            <img src={logo}/>


         {exercises && <ExerciseList exercises={exercises} deleteHandle={deleteHandle}/>}

         <img className="food3" src={food3}/>
         <img className="food3" src={food4}/>
        

         {foods && <FoodList foods={foods} deleteHandleFood={deleteHandleFood}/>}

        </div>

    );
}

export default Home;
