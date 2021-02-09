import Button from '@material-ui/core/Button';


const Navigation = () => {
    return (
        <nav className="navigation">

            <div className="setLinks">
                <Button variant="contained" color="secondary" href="/">Home</Button>
                <Button variant="contained" color="secondary" href="/addExercise">New Workout</Button>
            </div>
        </nav>
    );
}

export default Navigation;
