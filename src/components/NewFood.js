import logo from '../arjun-logo.png';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import food2 from '../food2.jpg';
import food3 from '../food3.jpg';


const NewFood = () => {
    const [name, setName] = useState('Turkey');
    const [macro, setMacro] = useState('Carbohydrates');
    const [total, setTotal] = useState('50 grams');
    const [calories, setCalories] = useState('300 calories');
    const history = useHistory();

    const submitHandleFood = (e) => {
        e.preventDefault();
        const food = {name, PrimaryMacro: macro, TotalMacros: total, TotalCalories: calories};

        fetch('http://localhost:8000/foods', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(food)
        }).then(() => {
            history.push('/')
        })
    }

    return (
        <div className="food-form">
             <img src={logo}/>
             <img className="food2" src={food2}/>
            
            <h2>Add Food</h2>
            <form className="new-food">
                <label>Food: </label>
                <select
                value={name}
                onChange={(e) => setName(e.target.value)}
                >
                    <option value="Banana">Banana</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Salmon">Salmon</option>
                    <option value="Oatmeal">Oatmeal</option>
                    <option value="Sweet Potatoes">Sweet Potatoes</option>
                    <option value="Baked Potatoes">Baked Potatoes</option>

                </select>
                <label>MacroType:</label>
                <select
                value={macro}
                onChange={(e) => setMacro(e.target.value)}
                >
                    <option value="Protein">Protein</option>
                    <option value="Carbohydrate">Carbohydrate</option>
                    <option value="Fats">Fats</option>
                </select>
                <label>Total Macro: </label>
                <select
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                >
                    <option value="30 grams carbs">Banana Macros: 30 grams carbs</option>
                    <option value="8 grams protein per 1 oz">"Turkey Macros: 8 grams protein per 1 oz"</option>
                    <option value="17 grams protein per 3 oz">"Salmon Macros: 17 grams protein per 3 oz"</option>
                    <option value="27 grams protein per 1 cup">"Oatmeal Cooked Macros: 27 grams protein per 1 cup"</option>
                    <option value="27 grams protein per 1 cup">"Sweet Potatoes Macros: 27 grams protein per 1 cup"</option>
                    <option value="37 grams protein per 1 medium potato">"Turkey Macros: 37 grams protein per 1 medium potato"</option>
                </select>
                <label>Total Calories: </label>
                <select
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                >
                     <option value="105 calories per banana">Banana Calories: 105 calories per banana</option>
                     <option value="55 calories per 1 oz">Turkey Calories: 55 calories per 1 oz</option>
                     <option value="177 calories per 3 oz">Salmon Calories: 177 calories per 3 oz</option>
                     <option value="158 calories per 1 cup"> Oatmeal Cooked Calories: 158 calories per 1 cups</option>
                     <option value="114 calories per 1 cup">Sweet Potatoes Calories: 114 calories per 1 cup</option>
                     <option value="161 calories per 1 medium potato">Baked Potatoes Calories: 161 calories per 1 medium potato</option>

                </select>
                <Button variant="contained" color="secondary" href="#contained-buttons" onClick={submitHandleFood}>Add Food</Button>


            </form>
        </div>
     );
}

export default NewFood;
