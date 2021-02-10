import ExerciseList from './ExerciseList'

const Search = ({exercises}) => {
    return (
        <>
        <input className="search" type="text" placeholder="Search"></input>
        {/* <ExerciseList exercises= {exercises.filter((exercise) =>
                exercise.type === 'compound'
            )} header="Compound Exercises"/> */}
        </>
     );
}

export default Search;
