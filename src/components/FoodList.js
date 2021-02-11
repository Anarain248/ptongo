
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const FoodList = ({foods, header, deleteHandleFood}) => {

    return (
        <div className="foods-list">

            <h3>{header}</h3>
            {foods.map((food) => (
                <div className="food-preview" key={food.id}>
                    <Link to={`/foods/${food.id}`}>
                    <h2>{food.name}</h2>
                    <p>Primary Macronutrient: {food.PrimaryMacro}</p>
                    <p>Total Macronutrients: {food.TotalMacros}</p>
                    <p>Total Calories: {food.TotalCalories}</p>
                    </Link>
                    <Button  variant="contained" color="secondary" href="#contained-buttons"onClick={() => deleteHandleFood(food.id)}>Delete Food</Button>
                    </div>
                    ))}
        </div>
            );
}

export default FoodList;
