import Button from '@material-ui/core/Button';
import Search from './Search';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {useHistory} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import LogoutButton from './auth/LogoutButton';

const Navigation = ({setAuthenticated}) => {
    return (
        <nav className="navigation">
            <div className="setLinks">
            <Link to="/home" className="button1">
                <Button variant="outlined" color="secondary" ><HomeIcon /> Home</Button>
                </Link>
                <Link to="/foodshome" className="button3">
                <Button variant="outlined" color="secondary">Healthy Foods</Button>
                </Link>
                <Link to="/faqs" className="button3">
                <Button variant="outlined" color="secondary">Faqs</Button>
                </Link>
                {/* <Link to="/sign-up" className="active">
                <Button variant="contained" color="secondary" >Sign Up</Button>
                </Link> */}
                <Link to="/" className="button3">
                <Button  variant="outlined"  color="secondary" ><ExitToAppIcon />Exit</Button>
                </Link>


                {/* <LogoutButton setAuthenticated={setAuthenticated} /> */}


            </div>
        </nav>
    );
}

export default Navigation;
