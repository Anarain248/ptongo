import logo from '../arjun-logo.png';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';



const New = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('compound');
    const [muscle, setMuscle] = useState('biceps');
    const [rep, setRep] = useState('3-5 reps');
    const history = useHistory();

    const submitHandle = (e) => {
        e.preventDefault();
        const exercise = {name, type};

        fetch('http://localhost:5000/exercises', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(exercise)
        }).then(() => {
            history.push('/')
        })
    }

    return (
        <div className="new">
             <img src={logo}/>
            <h2>Add Exercise</h2>
            <form onSubmit={submitHandle}>
                <label>Exercise: </label>
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <label>Type:</label>
                <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                >
                    <option value="compound">Compound</option>
                    <option value="isolation">Isolation</option>
                </select>
                <select
                value={type}
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
                <select
                value={type}
                onChange={(e) => setRep(e.target.value)}
                >
                    <option value="3-5 reps">3-5 reps</option>
                    <option value="8-12 reps">8-12 reps</option>
                    <option value="12-15 reps">12-15 reps</option>
                    <option value="15-20 reps">15-20 reps</option>
                </select>
                <button>Add Exercise</button>

            </form>
        </div>
     );
}

export default New;
