import logo from '../arjun-logo.png'
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';
import ExerciseList from './ExerciseList';
import picture from '../fitness.jpg';

const Home = () => {
    const [exercises, setExercises] = useState([
    {name: 'Squats', reps: 'Strength: 3-5 reps, Hypertrophy: 8-12 reps, Endurance: 15-25 reps', PrimaryMuscleWorked: 'Quads, HamStrings, Glutes', type: 'compound', id: 1},
    {name: 'Bench Press', reps: 'Strength: 3-5 reps, Hypertrophy: 8-12 reps, Endurance: 15-25 reps', PrimaryMuscleWorked: 'Chest, Shoulders, Triceps', type: 'compound', id: 2},
    {name: 'Stiff Leg Deadlift', reps: 'Strength: 3-5 reps, Hypertrophy: 8-12 reps, Endurance: 15-25 reps', PrimaryMuscleWorked: 'HamStrings, Glutes', type: 'compound', id: 3}
])

useEffect(() => {
    
})
    // const [nutrition, setNutrition] = useState([
    //     {name: 'Chicken', category: 'Protein', macronutrients: '25 grams Protein per 4oz', calories: '250 calories'},
    //     {name: 'Brown Rice', category: 'Carbohydrate', macronutrients: '45 grams Carbs per 1 cup', calories: '200 calories'},
    //     {name: 'Quinoa', category: 'Carbohydrate', macronutrients: '40 grams Carbs per 1 cup', calories: '200 calories'},
    // ])

    const deleteHandle = (id) => {
        const newExercises = exercises.filter(exercise => exercise.id !== id)
        setExercises(newExercises)
    }





    return (
        <div className="Homepage">
            <img src={logo}/>

            <h3>Learn about Exercises!</h3>
           <ExerciseList exercises={exercises} deleteHandle={deleteHandle}/> <img className="pic"src={picture}/>
        </div>

    );
}

export default Home;
