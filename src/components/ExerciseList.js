import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import {useState} from 'react';

const ExerciseList = ({exercises, header, deleteHandle}) => {
const [search, setSearch] = useState('');
const [filteredexercises, setFilteredexercises] = useState([])


    const handleSearch = () => {
        const results = exercises.filter((exercise) => {

            if (exercise.name.toLowerCase() === search.toLowerCase()) {
                return exercise
            }
        })

        setFilteredexercises(results);
        setSearch('');

    }
    return (
        <div className="exercises-list">

            <h3>{header}</h3>
            <div>
                <TextField id="standard-basic" label="Standard" className="search" type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
                <Button  variant="contained" color="secondary" href="#contained-buttons" onClick={handleSearch}><SearchIcon /></Button>
            </div>
             {/* {(filteredexercises) ? ( { */}
                 {filteredexercises.map((exercise) => (
                    <div className="exercise-preview" key={exercise.id}>
                        <Link to={`/exercises/${exercise.id}`}>
                        <h2>{exercise.name}</h2>
                        <p>Muscles Worked: {exercise.PrimaryMuscleWorked}</p>
                        <p>Type: {exercise.type}</p>
                        <p>Reps: {exercise.reps}</p>
                        </Link>
                        <Button  variant="contained" color="secondary" href="#contained-buttons"onClick={() => deleteHandle(exercise.id)}>Delete Exercise</Button>

                        </div>
                        )

                        )}


            {/* )} : ''} */}
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
                    )

                    )}

        </div>
            );
}

export default ExerciseList;
