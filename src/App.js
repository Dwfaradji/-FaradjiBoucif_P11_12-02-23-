import React from 'react';

import {BrowserRouter as Router, NavLink} from "react-router-dom"
import './index.css';
import Logo from "./Assets/pictures/logoKasa.png";
import RouteApp from './Routes/route'
import"./App.css"

const App = () => {
    let activeStyle = {
        textDecoration: "underline",
    };


    return (
        <Router>
            <div>
                <header className="header">
                    <div className="logo">

                        <img src={Logo} alt="logo"/>
                    </div>
                    <nav className="nav-bar">
                        <ul>
                            <li><NavLink to="/" style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }>Accueil</NavLink></li>
                            <li><NavLink to="/a_propos" style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }>A propos </NavLink></li>
                        </ul>
                    </nav>
                </header>
                <RouteApp/>
            </div>
        </Router>
    )
}
export default App

