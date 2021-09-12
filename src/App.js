import Aos from "aos";
import 'aos/dist/aos.css';
import Navbar from './components/Common/Menu/Navbar'
import './App.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/HomeContent/Landing";
import Login from "./components/HomeContent/Login";
import Projects from './components/Projects/Project';
import Donate from "./components/Payment/Donate";
import Initiative from "./components/Info/Initiative";
import fire from './firebase/config';
import { useState, useEffect } from 'react';

const App = () => {
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasAccount, setHasAccont] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const clearInput = () => {
    setEmail('');
    setName('');
    setPassword('');
  }
  const clearError = () => {
    setPasswordError('');
    setEmailError('');
  }

  const handleLogin = () => {
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;

          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  

  const handleSignup = () => {
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;

          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    console.log("we are out")
    fire.auth().signOut();
  };


  useEffect(() => {
    const auththenticate = () => {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          clearInput();
          setUser(user);
        }
        else {
          setUser('');
        }
      });
    };
    Aos.init({ duration: 2000 });
    auththenticate();
  }, [])
  
  return (
    <>
      <BrowserRouter >

        <Navbar user={user}
          handleLogout={handleLogout} />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/Projects" >
            <Projects />
          </Route>
          <Route exact path="/Initiative" >
            <Initiative />
          </Route>
          <Route exact path="/Donate" >
            {
              (user) ?
                <Donate /> :
                <Login
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  hasAccount={hasAccount}
                  setHasAccont={setHasAccont}
                  handleLogin={handleLogin}
                  name={name}
                  setName={setName}
                  handleSignup={handleSignup}
                  emailError={emailError}
                  passwordError={passwordError}
                />
            }

          </Route>
          <Route exact path="/Login">
            {
              (user) ?
                < Donate /> :
                <Login
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  hasAccount={hasAccount}
                  setHasAccont={setHasAccont}
                  handleLogin={handleLogin}
                  name={name}
                  setName={setName}
                  handleSignup={handleSignup}
                  emailError={emailError}
                  passwordError={passwordError}
                />
            }
          </Route>
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
