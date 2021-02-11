import ExerciseList from './ExerciseList';

const Search = ({exercises}) => {
//    const filterExercise = <ExerciseList exercises= {exercises.filter((exercise) =>
//         exercise.type === 'compound'
//     )} header="Compound Exercises"/>
    return (
        <>
        <input className="search" type="text" placeholder="Search"></input>

        </>
     );
}

export default Search;
