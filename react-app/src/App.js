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
import Levelone from './components/Levelone';
import Leveltwo from './components/Leveltwo';
import Levelthree from './components/Levelthree';
import Levelfour from './components/Levelfour';
import Levelfive from './components/Levelfive';
import Foods from './components/Foods';
import Foodstwo from './components/Foodstwo';
import Foodshome from './components/Foodshome';
import Timer from './components/Timer';


function App() {

  // const [authenticated, setAuthenticated] = useState(false);
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   (async() => {
  //     const user = await authenticate();
  //     console.log(user)
  //     if (!user.errors) {
  //       setAuthenticated(true);
  //     }
  //     setLoaded(true);
  //   })();
  // }, []);

  // if (!loaded) {
  //   return null;
  // }
  return (
    <Router>
    <div className="App">
      <Navigation />
      <div className="webContent">
        <Switch>
        <Route exact path="/">
            <SplashPage />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/levelone">
            <Levelone />
          </Route>
          <Route path="/leveltwo">
            <Leveltwo />
          </Route>
          <Route path="/levelthree">
            <Levelthree />
          </Route>
          <Route path="/levelfour">
            <Levelfour />
          </Route>
          <Route path="/levelfive">
            <Levelfive />
          </Route>
          <Route path="/proteinfoods">
            <Foodstwo />
          </Route>
          <Route path="/carbohydratefoods">
            <Foods />
          </Route>
          <Route path="/foodshome">
            <Foodshome />
          </Route>
          <Route path="/timer">
            <Timer />
          </Route>
        </Switch>

      </div>
      <Footer />
    </div>
    </Router>

  );

  }


export default App;
