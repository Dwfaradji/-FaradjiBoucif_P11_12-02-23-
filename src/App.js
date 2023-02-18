import React from 'react';
import {Link} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom"
import './index.css';
import Logo from "./images/LOGO.png";
import RouteApp from './Routes/route'

const App = () => {
    return (
        <Router>
            <div>
                <header className="header">
                    <div className="logo">

                        <img src={Logo} alt="logo"/>
                    </div>
                    <nav className="nav-bar">
                        <ul>
                            <li><Link to="/" className="link-nav">Acceuil</Link></li>
                            <li><Link to="/a_propos">A propos </Link></li>
                        </ul>
                    </nav>
                </header>
                <RouteApp/>
            </div>
        </Router>
    )
}
export default App

