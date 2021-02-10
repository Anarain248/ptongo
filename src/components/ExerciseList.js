import Button from '@material-ui/core/Button';

const ExerciseList = ({exercises, header, deleteHandle}) => {
    return (
        <div className="exercises-list">

            <h3>{header}</h3>
            {exercises.map((exercise) => (
                <div className="exercise-preview" key={exercise.id}>
                    <h2>{exercise.name}</h2>
                    <p>Muscles Worked: {exercise.PrimaryMuscleWorked}</p>
                    <p>Type: {exercise.type}</p>
                    <Button  variant="contained" color="secondary" href="#contained-buttons"onClick={() => deleteHandle(exercise.id)}>Delete Exercise</Button>
                    </div>
                    ))}
        </div>
            );
}

export default ExerciseList;
