


import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import logo from '../arjun-logo.png';
import KitchenIcon from '@material-ui/icons/Kitchen';
import food from '../food.jpg';
import food3 from '../food3.jpg';
import food4 from '../food4.jpg';

const Foodshome = () => {
    return (
        <>
        <img className="logo" src={logo}/>
        <div className="foodhome">


            <h2>Protein:</h2>
             <Link to="/proteinfoods" className="button2">
                <Button variant="contained" color="secondary" ><KitchenIcon /> Protein List</Button>
                </Link>

                <img className="fit5" src={food3}/>
                <h2>Carbohydrate:</h2>
                <Link to="/carbohydratefoods" className="button2">
                <Button variant="contained" color="secondary" ><KitchenIcon />  Carbohydrates List</Button>
                </Link>

                <h2>Fats:</h2>
                <Link to="/fatsfoods" className="button2">
                <Button variant="contained" color="secondary" ><KitchenIcon /> Fats List</Button>
                </Link>
        </div>
        </>
     );
}

export default Foodshome;
