import logo from '../arjun-logo.png';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import fit3 from '../fit3.jpg';
import ptongo from '../ptongo.jpg'



const SplashPage = () =>

{
    const history = useHistory();
    const SplashHandle = (e) => {
        e.preventDefault()
        history.push('/home')
    }




    return (
      <>
      <img className="logo" src={logo}/>
        <div className ="splash-form">


            <h1 className="mission">Workout anytime, anywhere with full body bodyweight workouts. Level up your fitness.</h1>

            <img className="fit3" src={ptongo}/>
            {/* <form className="new-splash">
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
        </div> */}
        {/* <div className="demobutton">
        <Button variant="contained" color="secondary"type="submit" onClick={SplashHandle}>Demo</Button>
        </div> */}
        <div className= "loginbutton">
        <Button variant="contained" color="secondary"type="submit" onClick={SplashHandle}>Start Your Fitness Journey Now!</Button>
        </div>


        </div>
        </>
    );
}

export default SplashPage;
