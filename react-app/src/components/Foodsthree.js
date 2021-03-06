import FoodListthree from './FoodListthree';
import {useState, useEffect} from 'react';
import logo from '../arjun-logo.png'


const Foodsthree = () => {
const [foodsthree, setFoodsthree] = useState([]);

useEffect(() => {
    (async () => {
        const res = await fetch(`/api/foodsthree/`)
        const {foodsthree: fetchedFoods} = await res.json();
        setFoodsthree(fetchedFoods);
    })()
}, [])
return (
    <>
    <img className="logo" src={logo}/>
    <div className="Homepage">

   

        {foodsthree && <FoodListthree foods={foodsthree}/>}

    </div>
    </>
)

}

export default Foodsthree;
