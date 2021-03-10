


import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import logo from '../arjun-logo.png';
import KitchenIcon from '@material-ui/icons/Kitchen';
import food from '../food.jpg';

const Foodshome = () => {
    return (
        <>
        <img className="logo" src={logo}/>
        <div>
        <img className="fit5" src={food}/>
             <Link to="/proteinfoods" className="button1">
                <Button variant="contained" color="secondary" ><KitchenIcon /> Protein List</Button>
                </Link>

                <Link to="/carbohydratefoods" className="button1">
                <Button variant="contained" color="secondary" ><KitchenIcon />  Carbohydrates List</Button>
                </Link>

                <Link to="/fatsfoods" className="button1">
                <Button variant="contained" color="secondary" ><KitchenIcon /> Fats List</Button>
                </Link>
        </div>
        </>
     );
}

export default Foodshome;
