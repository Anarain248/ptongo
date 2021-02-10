import logo from '../arjun-logo.png'
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';
import ExerciseList from './ExerciseList'
import picture from '../fitness.jpg'

const Home = () => {
    const [exercises, setExercises] = useState([
        {name: 'Barbell Squats', reps: 'Strength: 3-5 reps, Hypertrophy: 8-12 reps, Endurance: 15-25 reps', PrimaryMuscleWorked: 'Quads, HamStrings, Glutes', type: 'compound', id: 1},
        {name: 'Bench Press', reps: 'Strength: 3-5 reps, Hypertrophy: 8-12 reps, Endurance: 15-25 reps', PrimaryMuscleWorked: 'Chest, Shoulders, Triceps', type: 'compound', id: 2},
        {name: 'Stiff Leg Deadlift', reps: 'Strength: 3-5 reps, Hypertrophy: 8-12 reps, Endurance: 15-25 reps', PrimaryMuscleWorked: 'HamStrings, Glutes', type: 'compound', id: 3}
    ])

    const deleteHandle = (id) => {
        const newExercises = exercises.filter(exercise => exercise.id !== id)
        setExercises(newExercises)
    }


    return (
        <div className="Homepage">
            <img src={logo}/>

            <h3>Exercise List</h3>
            <ExerciseList exercises={exercises} deleteHandle={deleteHandle}/> <img className="pic"src={picture}/>


        </div>

    );
}

export default Home;
