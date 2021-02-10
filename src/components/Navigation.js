import Button from '@material-ui/core/Button';
import Search from './Search'


const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="setLinks">
                <Button className="button1" variant="contained" color="secondary" href="/">Home</Button>
                <Button className="button2" variant="contained"  color="secondary" href="/addExercise">New Workout</Button>
                <Search />

            </div>
        </nav>
    );
}

export default Navigation;
