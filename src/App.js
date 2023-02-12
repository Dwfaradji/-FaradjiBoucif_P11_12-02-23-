import React from 'react';
import { Routes,Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom"
import './index.css';
import Home from './pages/home';
import Logo from "./images/LOGO.png";
import DetailLogement from "./pages/detail-logement";

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
                            <li>Acceuil</li>
                            <li>A propos</li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/logement/:id" element={<DetailLogement id={""}/>}/>
                </Routes>
            </div>
        </Router>
    )
}
export default App

// import React, {FunctionComponent} from 'react';
// import PokemonList from "./pages/pokemon-list";
// import PokemonDetail from "./pages/pokemon-detail";
// import {Link, Route, Routes} from "react-router-dom";
// import {BrowserRouter as Router} from "react-router-dom"
// import PageNotFound from "./pages/page-not-found";
// import PokemonEdit from "./pages/pokemon-edit";
//
// const App: FunctionComponent = () => {
//     //Jsx
//     return (
//         <Router>
//             <div>
//                 {/*La barre de navigation*/}
//                 <nav>
//                     <div className="nav-wrapper teal">
//                         <Link to="/" className="brand-logo center"> Pokédex</Link>
//                     </div>
//                 </nav>
//                 {/* le système de gestion des routes */}
//                 <Routes>
//                     <Route path="/" element={<PokemonList/>}/>
//                     <Route path="/pokemons/" element={<PokemonList/>}/>
//                     <Route path="/pokemons/edit/:id" element={<PokemonEdit />}/>
//                     <Route path="/pokemons/:id" element={<PokemonDetail id={""}/>}/>
//                     {/*Définit la route pour la page not found *Signifie que toutes les routes non trouvées attirons dans ce composant   */}
//                     <Route path="*" element={<PageNotFound/>}/>
//                 </Routes>
//             </div>
//         </Router>
//
//     )
// }
//
// export default App;
