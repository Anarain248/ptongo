


import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import logo from '../arjun-logo.png'

const Foodshome = () => {
    return (
        <div>
             <img src={logo}/>
             <Link to="/proteinfoods" className="button1">
                <Button variant="contained" color="secondary" > Protein List</Button>
                </Link>

                <Link to="/carbohydratefoods" className="button1">
                <Button variant="contained" color="secondary" > Carbohydrates List</Button>
                </Link>

                <Link to="/fatsfoods" className="button1">
                <Button variant="contained" color="secondary" >Fats List</Button>
                </Link>
        </div>
     );
}

export default Foodshome;
