import logo from '../arjun-logo.png';
import {useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useHistory } from 'react-router-dom';
import fit1 from '../fit1.jpg'



const New = () => {
    const [name, setName] = useState('Stiff Leg Deadlifts');
    const [type, setType] = useState('compound');
    const [muscle, setMuscle] = useState('Chest');
    const [rep, setRep] = useState('3-5 reps');
    const history = useHistory();



    const submitHandle = (e) => {
        e.preventDefault();
        console.log('IN SUBMIT HANDLER')
        const exercise = {name, type, PrimaryMuscleWorked: muscle, reps: rep};
        console.log(exercise)
        fetch('http://localhost:5000/exercises', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(exercise)
        }).then(() => {
            history.push('/')
        })
    }

    return (
        <div className="exercise-form">
             <img src={logo}/>
            <h2>Add Exercise</h2>
           
            <form className="new" >
                <label>Exercise: </label>
                <select
                value={name}
                onChange={(e) => setName(e.target.value)}
                >
                    <option value="Stiff Leg Deadlifts">Stiff Leg Deadlifts</option>
                    <option value="Back Squats">Back Squats</option>
                    <option value="Bench Press">Bench Press</option>
                    <option value="Barbell/Dumbbell Rows">Barbell/Dumbbell Rows</option>
                    <option value="Lat Pulldowns">Lat Pulldowns</option>
                    <option value="Dumbbell Flys">Dumbbell Flys</option>
                    <option value="Bicep Curls">Bicep Curls</option>
                    <option value="Tricep Kickbacks">Tricep Kickbacks</option>

                </select>
                <label>Type:</label>
                <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                >
                    <option value="compound">Compound</option>
                    <option value="isolation">Isolation</option>
                </select>
                <label>Muscle Group:</label>
                <select
                value={muscle}
                onChange={(e) => setMuscle(e.target.value)}
                >
                    <option value="Chest">Chest</option>
                    <option value="Back">Back</option>
                    <option value="Quads">Quads</option>
                    <option value="Hamstrings">Hamstrings</option>
                    <option value="Triceps">Triceps</option>
                    <option value="Shoulders">Shoulders</option>
                    <option value="Abs">Abs</option>
                    <option value="Biceps">Biceps</option>
                    <option value="Triceps">Triceps</option>
                    <option value="Calves">Calves</option>
                    <option value="Chest, Shoulders, Triceps">Chest, Shoulders, Triceps</option>
                    <option value="Shoulders, Triceps">Shoulders, Triceps</option>
                    <option value="Back, Biceps">Back, Biceps</option>
                    <option value="Quads, Hamstrings, Glutes">Quads, Hamstrings, Glutes</option>
                    <option value="Hamstrings, Glutes">Hamstrings, Glutes</option>
                </select>
                <label>Reps:</label>
                <select
                value={rep}
                onChange={(e) => setRep(e.target.value)}
                >
                    <option value="3-5 reps">3-5 reps</option>
                    <option value="8-12 reps">8-12 reps</option>
                    <option value="12-15 reps">12-15 reps</option>
                    <option value="15-20 reps">15-20 reps</option>
                </select>
                <Button  variant="contained" color="secondary" href="#contained-buttons" onClick={submitHandle}>Add Exercise</Button>

            </form>

        </div>
     );
}

export default New;
