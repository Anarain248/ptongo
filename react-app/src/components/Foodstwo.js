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
    <div className="Homepage">

        <img src={logo}/>

        {foodstwo && <FoodListtwo foods={foodstwo}/>}

    </div>
)

}

export default Foodstwo;
