import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {AuthContext} from "../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import './NavBar.css'

function NavBar() {
    const navigate = useNavigate();
    const {isAuth, user, logout} = useContext(AuthContext);
    console.log("is auth: " + isAuth);
    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
            </Link>

            {!isAuth && (
                <div>
                    <button
                        type="button"
                        onClick={() => {
                            navigate('/signin');
                        }}
                    >
                        Log in
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            navigate('/signup')
                        }}
                    >
                        Registreren
                    </button>
                </div>)}
            {isAuth && (
                <div className="nav-div">
                    <p className="nav-username">
                        {user}
                    </p>
                    <button
                        type="button"
                        onClick={() => {
                            navigate('/');
                            logout();
                            console.log("De gebruiker is uitgelogd");
                        }}
                    >
                        Log Out
                    </button>
                </div>
            )}
        </nav>
    );
}

export default NavBar;