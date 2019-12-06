import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { logout } from '../store/actions';

const NavBar = ({ auth, logout }) => (
    <div className="navbar">
        <div className="container">
            <ul className="navbar-contianer">  
                <li><Link className="navbar-brand" to="/">LOGO</Link></li>
                <li><Link className="navbar-item" to="/register">Register</Link></li>
                <li><Link className="navbar-item" to="/login">Login</Link></li>
                <li><button className="logout-button" onClick={logout}>Logout</button></li>
            </ul> 
            {auth.isauthenticated && (
                <p className="navbar-user">Logged in as {auth.user.username}</p>
            )}
        </div>
    </div>
);

export default connect(
    store => ({ auth: store.auth }), 
    { logout }
    )(NavBar);