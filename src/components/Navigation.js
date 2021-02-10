import Button from '@material-ui/core/Button';
import Search from './Search';
import {Link} from 'react-router-dom';


const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="setLinks">
               <Link to="/">
                <Button className="button1" variant="contained" color="secondary" >Home</Button>
                </Link>
                <Link to="/new">
                <Button className="button2" variant="contained"  color="secondary" >New Workout</Button>
                </Link>
                <Search />

            </div>
        </nav>
    );
}

export default Navigation;
