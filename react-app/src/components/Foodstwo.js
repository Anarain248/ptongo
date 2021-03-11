import FoodListtwo from './FoodListtwo';
import {useState, useEffect} from 'react';
import logo from '../arjun-logo.png'


const Foodstwo = () => {
const [foodstwo, setFoodstwo] = useState([]);

useEffect(() => {
    (async () => {
        const res = await fetch(`/api/foodstwo/`)
        const {foodstwo: fetchedFoods} = await res.json();
        setFoodstwo(fetchedFoods);
    })()
}, [])
return (
    <>
    <img className="logo" src={logo}/>
    <div className="Homepage">



        {foodstwo && <FoodListtwo foods={foodstwo}/>}

    </div>
    </>
)

}

export default Foodstwo;
