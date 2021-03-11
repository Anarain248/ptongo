import FoodList from './FoodList';
import {useState, useEffect} from 'react';
import logo from '../arjun-logo.png'


const Foods = () => {
const [foods, setFoods] = useState([]);

const deleteHandleFood = (id) => {
    const newFoods = foods.filter(food => food.id !== id)
    setFoods(newFoods)
}

        useEffect(() => {

            (async () => {
              const response = await fetch(`/api/foods/`);
              const {foods: fetchedFoods} = await response.json();
              setFoods(fetchedFoods);
            })();
          }, []);
    return (
        <>
        <img className="logo" src={logo}/>
        <div className="Homepage">



            {foods && <FoodList foods={foods} deleteHandleFood={deleteHandleFood}/>}

        </div>
        </>


     );
}

export default Foods;
