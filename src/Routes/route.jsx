import React from 'react';
import {Routes, Route} from "react-router-dom";
import DetailLogement from "../pages/detail-logement";
import PageNotFound from "../pages/page-not-found";
import APropos from "../pages/a-propos";
import Home from '../pages/home';

const RouteApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/a_propos" element={<APropos/>}/>
            <Route path="/logement/:id" element={<DetailLogement id={""}/>}/>
            <Route path="/*" element={<PageNotFound/>}/>
        </Routes>
    )
}
export default RouteApp

