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
import Timer from './Timer';


const Levelone = () => {
    const [err, setErr] = useState([]);
    const [exercises, setExercises] = useState([]);



    const deleteHandle = (id) => {
        const newExercises = exercises.filter(exercise => exercise.id !== id)
        setExercises(newExercises)
    }

    // const deleteHandleFood = (id) => {
    //     const newFoods = foods.filter(food => food.id !== id)
    //     setFoods(newFoods)
    // }



    useEffect(() => {

        (async () => {
          const response = await fetch(`/api/exercises`);
          console.log(response)
          const {exercises: fetchedExercises} = await response.json();
          setExercises(fetchedExercises);
        })();
      }, []);

      // useEffect(() => {

      //   (async () => {
      //     const response = await fetch(`/api/foods`);
      //     const {foods: fetchedFoods} = await response.json();
      //     setFoods(fetchedFoods);
      //   })();
      // }, []);




    return (
      <>
      <img className="logo" src={logo}/>
        <div className="Homepage">
            {err && <div>{err}</div>}



        <Timer />
         {exercises && <ExerciseList exercises={exercises} deleteHandle={deleteHandle}/>}

         {/* <img className="food3" src={food3}/>
         <img className="food3" src={food4}/> */}


         {/* {foods && <FoodList foods={foods} deleteHandleFood={deleteHandleFood}/>} */}

        </div>
        </>

    );
}

export default Levelone;
