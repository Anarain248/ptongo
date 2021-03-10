import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import logo from '../arjun-logo.png';
import fit3 from '../fit3.jpg';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

const Home = () => {
    return (
        <>
        <img className="logo" src={logo}/>
        <div className="setLink">
        <img className="fit4" src={fit3}/>

            <h2>Beginner:</h2>
             <Link to="/levelone" className="button1">
                <Button variant="contained" color="secondary" ><FitnessCenterIcon/>Level 1</Button>
                </Link>

                <Link to="/leveltwo" className="button1">
                <Button variant="contained" color="secondary" ><FitnessCenterIcon/>Level 2</Button>
                </Link>

                <Link to="/levelthree" className="button1">
                <Button variant="contained" color="secondary" ><FitnessCenterIcon/> Level 3</Button>
                </Link>

                <h2>Intermediate:</h2>
                <Link to="/levelfour" className="button1">
                <Button variant="contained" color="secondary" ><FitnessCenterIcon/> Level 4</Button>
                </Link>

                <Link to="/levelfive" className="button1">
                <Button variant="contained" color="secondary" ><FitnessCenterIcon/> Level 5</Button>
                </Link>

                <Link to="/levelsix" className="button1">
                <Button variant="contained" color="secondary" ><FitnessCenterIcon/> Level 6</Button>
                </Link>

                <Link to="/levelseven" className="button1">
                <Button variant="contained" color="secondary" ><FitnessCenterIcon/> Level 7</Button>
                </Link>

                <h2>Advanced:</h2>
                <Link to="/leveleight" className="button1">
                <Button variant="contained" color="secondary" ><FitnessCenterIcon/> Level 8</Button>
                </Link>

                <Link to="/levelnine" className="button1">
                <Button variant="contained" color="secondary" ><FitnessCenterIcon/> Level 9</Button>
                </Link>

                <Link to="/levelten" className="button1">
                <Button variant="contained" color="secondary" ><FitnessCenterIcon/> Level 10</Button>
                </Link>


        </div>
        </>
    );
}

export default Home;
