import './App.css';
import { useState } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
//Components
import Navbar from './components/layout/Navbar'
import Login from './components/pages/Login'
import DashBoard from './components/pages/Dashboard'

function App() {

    const [loggedIn, setLoggedIn] = useState(true);

    return (
        <div className="page bg-gray-200">
            <Navbar />
            <Switch>
                <Route exact path="/">
                    {loggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/dashboard">
                    <DashBoard />
                </Route>
            </Switch>   
        </div>
    );
}

export default App;
