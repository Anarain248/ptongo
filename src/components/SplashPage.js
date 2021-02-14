import logo from '../arjun-logo.png';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import food from '../food.jpg';



const SplashPage = () => {
    const history = useHistory();
    const SplashHandle = (e) => {
        e.preventDefault()
        history.push('/home')
    }
    return (
        <div className ="splash-form">
            <img src={logo}/>
            <h1 className="mission">Our mission is to make working out and dieting simpler for you!</h1>
            <img className="food" src={food}/>
            <form className="new-splash">
        <label>
          Email
          <input
            type="text"
            required
          />
        </label>
        <label>
          Name
          <input
            type="text"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            required
          />
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            required
          />
        </label>

        <div className="signupbutton">
        <Button variant="contained" color="secondary"type="submit">Sign Up Now!</Button>
        </div>
        <div className="demobutton">
        <Button variant="contained" color="secondary"type="submit" onClick={SplashHandle}>Demo</Button>
        </div>
        <div className= "loginbutton">
        <Button variant="contained" color="secondary"type="submit">Login</Button>
        </div>
        </form>

        </div>
    );
}

export default SplashPage;
