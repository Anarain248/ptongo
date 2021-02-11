import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const ExerciseList = ({exercises, header, deleteHandle}) => {

    return (
        <div className="exercises-list">

            <h3>{header}</h3>
            {exercises.map((exercise) => (
                <div className="exercise-preview" key={exercise.id}>
                    <Link to={`/exercises/${exercise.id}`}>
                    <h2>{exercise.name}</h2>
                    <p>Muscles Worked: {exercise.PrimaryMuscleWorked}</p>
                    <p>Type: {exercise.type}</p>
                    <p>Reps: {exercise.reps}</p>
                    </Link>
                    <Button  variant="contained" color="secondary" href="#contained-buttons"onClick={() => deleteHandle(exercise.id)}>Delete Exercise</Button>
                    </div>
                    ))}
        </div>
            );
}

export default ExerciseList;
