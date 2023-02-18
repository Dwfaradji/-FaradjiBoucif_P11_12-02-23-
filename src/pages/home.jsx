import React from "react";
import '../App.css';
import BackgroundPicture from "../component/background-picture";
import CardList from "../component/card";
import datas from "../Api/annonces-logements.json"
import img from "../images/IMG.png"

const Home = () => {
    return (
        <div>
            <BackgroundPicture picture={img} title={"Chez vous, partout et ailleurs"}/>
            <div className="container-list">
                {datas.map(data => (
                    <CardList key={data.id} title={data.title} picture={data.cover} id={data.id} />))}
            </div>
        </div>
    );
}

export default Home;
