import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import logo from '../arjun-logo.png'

const Home = () => {
    return (
        <div className="setLinks">

            <img src={logo}/>
             <Link to="/levelone" className="button1">
                <Button variant="contained" color="secondary" > Level 1</Button>
                </Link>

                <Link to="/leveltwo" className="button1">
                <Button variant="contained" color="secondary" > Level 2</Button>
                </Link>

                <Link to="/levelthree" className="button1">
                <Button variant="contained" color="secondary" > Level 3</Button>
                </Link>

                <Link to="/levelfour" className="button1">
                <Button variant="contained" color="secondary" > Level 4</Button>
                </Link>

                <Link to="/levelfive" className="button1">
                <Button variant="contained" color="secondary" > Level 5</Button>
                </Link>

                <Link to="/levelsix" className="button1">
                <Button variant="contained" color="secondary" > Level 6</Button>
                </Link>

                <Link to="/levelseven" className="button1">
                <Button variant="contained" color="secondary" > Level 7</Button>
                </Link>

                <Link to="/leveleight" className="button1">
                <Button variant="contained" color="secondary" > Level 8</Button>
                </Link>

                <Link to="/levelnine" className="button1">
                <Button variant="contained" color="secondary" > Level 9</Button>
                </Link>

                <Link to="/levelten" className="button1">
                <Button variant="contained" color="secondary" > Level 10</Button>
                </Link>
        </div>
    );
}

export default Home;
