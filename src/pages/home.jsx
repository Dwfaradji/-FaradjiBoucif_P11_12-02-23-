import React from "react";
import '../App.css';
import HomeComponentHeader from "../component/header";
import CardList from "../component/card";
import datas from "../Api/annonces-logements.json"

const Home = () => {
    return (
        <div>
            <HomeComponentHeader/>
            <div className="container-list">
                {datas.map(data => (
                    <CardList key={data.id} title={data.title} picture={data.cover} id={data.id} />))}
            </div>
        </div>
    );
}

export default Home;
