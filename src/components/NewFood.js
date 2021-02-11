import logo from '../arjun-logo.png';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';



const New = () => {
    const [name, setName] = useState('Barbell Squats');
    const [macro, setMacro] = useState('compound');
    const [total, setTotal] = useState('biceps');
    const [calories, setCalories] = useState('3-5 reps');
    const history = useHistory();

    const submitHandleFood = (e) => {
        e.preventDefault();
        const food = {name, macro, total, calories};

        fetch('http://localhost:8000/foods', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(food)
        }).then(() => {
            history.push('/')
        })
    }

    return (
        <div className="new">
             <img src={logo}/>
            <h2>Add Food</h2>
            <form onSubmit={submitHandleFood}>
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
                <select
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                >
                    <option value="Banana Macros: 30 grams carbs">Banana Macros: 30 grams carbs</option>
                    <option value="Turkey Macros: 8 grams protein per 1 oz">"Turkey Macros: 8 grams protein per 1 oz"</option>
                    <option value="Salmon Macros: 17 grams protein per 3 oz">"Salmon Macros: 17 grams protein per 3 oz"</option>
                    <option value="Oatmeal Cooked Macros: 27 grams protein per 1 cup">"Oatmeal Cooked Macros: 27 grams protein per 1 cup"</option>
                    <option value="Sweet Potatoes Macros: 27 grams protein per 1 cup">"Sweet Potatoes Macros: 27 grams protein per 1 cup"</option>
                    <option value="Baked Potatoes Macros: 37 grams protein per 1 medium potato">"Turkey Macros: 37 grams protein per 1 medium potato"</option>
                </select>
                <select
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                >
                     <option value="Banana Calories: 105 calories per banana">Banana Calories: 105 calories per banana</option>
                     <option value="Turkey Calories: 55 calories per 1 oz">Turkey Calories: 55 calories per 1 oz</option>
                     <option value="Salmon Calories: 177 calories per 3 oz">Salmon Calories: 177 calories per 3 oz</option>
                     <option value="Oatmeal Cooked Calories: 158 calories per 1 cup"> Oatmeal Cooked Calories: 158 calories per 1 cups</option>
                     <option value="Sweet Potatoes Calories: 114 calories per 1 cup">Sweet Potatoes Calories: 114 calories per 1 cup</option>
                     <option value="Baked Potatoes Calories: 161 calories per 1 medium potato">Baked Potatoes Calories: 161 calories per 1 medium potato</option>

                </select>
                <Button variant="contained" color="secondary" href="#contained-buttons">Add Exercise</Button>


            </form>
        </div>
     );
}

export default New;
