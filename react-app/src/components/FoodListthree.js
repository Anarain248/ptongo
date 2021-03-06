
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';

const FoodListthree = ({foods, header, deleteHandleFood}) => {
    const [search, setSearch] = useState('');
    const [filteredfoods, setFilteredfoods] = useState([]);
    const [searched, setSearched] = useState('');


        const handleSubmit = () => {
            setFilteredfoods([]);
         }
        const handleSearch = () => {
            setSearched(search)
            const results = foods.filter((food) => {

                if (food.name.toLowerCase() === search.toLowerCase()) {
                    return food
                }
            })

            setFilteredfoods(results);
            setSearch('');

        }


    return (
        <div className="foods-list">
            <div>
                <TextField id="standard-basic" label="Search Food" className="search" type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
                <Button  variant="contained" color="secondary" href="#contained-buttons" onClick={handleSearch}><SearchIcon /></Button>
            </div>
            {filteredfoods.length ? <h3>Search Results:</h3>: ''}
            {filteredfoods.length ? <h5>{`You searched for ${searched}`}</h5>: ''}

            {(filteredfoods.length) ? (
                 filteredfoods.map((food) => (
                    <div className="exercise-preview" key={food.id}>
                        {/* <Link to={`/exercises/${food.id}`}> */}
                        <h2>{food.name}</h2>
                        <p>Primary Macronutrient: {food.primarymacro}</p>
                        <p>Total Macronutrients: {food.totalmacros}</p>
                        <p>Total Calories: {food.totalcalories}</p>
                        {/* </Link> */}
                    </div>
                    )
                )
                ) : ('')
             }
              {filteredfoods.length ?  <Button  variant="contained" color="secondary" href="#contained-buttons" onClick={handleSubmit}>Clear Search</Button>: ''}

              <h3>Fats Food List:</h3>

            {foods.map((food) => (
                <div className="food-preview" key={food.id}>
                    {/* <Link to={`/foods/${food.id}`}> */}
                    <h2>{food.name}</h2>
                    <p>Primary Macronutrient: {food.primarymacro}</p>
                    <p>Total Macronutrients: {food.totalmacros}</p>
                    <p>Total Calories: {food.totalcalories}</p>
                    {/* </Link> */}
                    {/* <Button  variant="contained" color="secondary" href="#contained-buttons"onClick={() => deleteHandleFood(food.id)}><DeleteIcon />Delete Food</Button> */}
                    </div>
                    ))}
        </div>
            );
}

export default FoodListthree;
