import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import MyJob from '../pages/MyJob';
import { useTheme } from '../themes/ThemeContext';

const RoutesApp = () => {
    const { theme } = useTheme();
    return(
    <Router>
        <section className={`App ${theme}`}>
        <nav>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/myjob">My Job</Link>
                </nav>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/myjob" element={<MyJob />}/>
        </Routes>
        </section>
    </Router>
    )
};

export default RoutesApp;