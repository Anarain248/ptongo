import logo from '../arjun-logo.png';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';



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
                    <option value="Turkey Macros: 8 grams protein per 1 oz">"Turkey Macros: 8 grams protein per 1 oz"</option>
                    <option value="Turkey Macros: 8 grams protein per 1 oz">"Turkey Macros: 8 grams protein per 1 oz"</option>
                </select>
                <select
                value={type}
                onChange={(e) => setRep(e.target.value)}
                >
                    <option value="3-5 reps">3-5 reps</option>
                    <option value="8-12 reps">8-12 reps</option>
                    <option value="12-15 reps">12-15 reps</option>
                    <option value="15-20 reps">15-20 reps</option>
                </select>
                <button>Add Exercise</button>

            </form>
        </div>
     );
}

export default New;
