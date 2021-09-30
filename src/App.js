import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 
'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Courses from './components/pages/Courses';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route path="/" exact component= {Home} />
      <Route path="/services" component= {Services} />
      <Route path="/courses" component= {Courses} />
      <Route path="/sign-up" component= {SignUp} />
    </Switch>
    </Router>
    
    </>
    
  );
}

export default App;
