import {useEffect, useState, } from 'react'
import logo from './arjun-logo.png';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './footer'
import New from './components/New'
import NewFood from './components/NewFood';
import SplashPage from './components/SplashPage';
import LoginForm from './components/auth/LoginForm'
import SignUpForm from "./components/auth/SignUpForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from './components/auth/authenticate';


function App() {

  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      console.log(user)
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }
  return (
    <Router>
    <div className="App">
      <Navigation />
      <div className="webContent">
        <Switch>
        <Route exact path="/">
            <SplashPage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/sign-up" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
          <Route path="/login">
            <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated}/>
          </Route>
          <Route path="/new">
            <New />
          </Route>
          <Route  path="/newFood">
            <NewFood />
          </Route>
        </Switch>

      </div>
      <Footer />
    </div>
    </Router>

  );

  }


export default App;
