import Button from '@material-ui/core/Button';
import Search from './Search';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="setLinks">
               <Link to="/" className="button1">
                <Button  variant="contained" color="secondary" >Home</Button>
                </Link>
                <Link to="/new" className="button2">
                <Button  variant="contained"  color="secondary" >New Exercise</Button>
                </Link>
                <Link to="/newFood" className="button3">
                <Button  variant="contained"  color="secondary" >New Food</Button>
                </Link>


            </div>
        </nav>
    );
}

export default Navigation;
