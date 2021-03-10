import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import {useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const ExerciseListeight = ({exercises, header, deleteHandle}) => {
    const [search, setSearch] = useState('');
    const [filteredexercises, setFilteredexercises] = useState([])
    const [searched, setSearched] = useState('');

        const handleSubmit = () => {
            setFilteredexercises([]);
         }
        const handleSearch = () => {
            setSearched(search)
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


                <div>
                    <TextField id="standard-basic" label="Search Exercise" className="search" type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
                    <Button  variant="contained" color="secondary" href="#contained-buttons" onClick={handleSearch}><SearchIcon /></Button>
                </div>
                {filteredexercises.length ? <h3>Search Results:</h3>: ''}
                {filteredexercises.length ? <h5>{`You searched for ${searched}`}</h5>: ''}
                {(filteredexercises.length) ? (
                     filteredexercises.map((exercise) => (
                        <div className="exercise-preview" key={exercise.id}>
                            <Link to={`/exercises/${exercise.id}`}>
                            <h2>{exercise.name}</h2>
                            <p>Muscles Worked: {exercise.primarymuscle}</p>
                            {/* <p>Type: {exercise.exerciseType}</p> */}
                            <p>Reps: {exercise.reps}</p>
                            </Link>
                        </div>
                        )
                    )
                    ) : ('')
                 }
                  {filteredexercises.length ?  <Button  variant="contained" color="secondary" href="#contained-buttons" onClick={handleSubmit}>Clear Search</Button>: ''}
                 <h3>Level 8 Workout:</h3>
                 <h3>Key Terms:</h3>
                 <h4>Superset- Performing two exercises together without any rest in between.</h4>


                {exercises.map((exercise) => (

                    <div className="exercise-preview" key={exercise.id}>

                        <h2>{exercise.name}</h2>
                        <p>Muscles Worked: {exercise.primarymuscle}</p>
                        {/* <p>Type: {exercise.exerciseType}</p> */}
                        <p>Reps: {exercise.reps}</p>

                        <Button  variant="contained" color="secondary" href="#contained-buttons"onClick={() => deleteHandle(exercise.id)}> <WhatshotIcon />Complete Exercise</Button>

                        </div>
                        )

                        )}

            </div>
                );
    }

    export default ExerciseListeight;
