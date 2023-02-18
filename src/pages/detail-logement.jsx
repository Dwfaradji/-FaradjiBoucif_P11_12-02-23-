import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import datas from "../Api/annonces-logements.json"
import Caroussel from "../component/caroussel";
import "../component/detail-logement.css"
import Collapse from "../component/collapse";
import Star from "../component/star";


const DetailLogement = () => {
    const params = useParams()
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        datas.forEach(data => {
            if (params.id === data.id) {
                setLogement(data);
            }
        })
    }, [params.id]);
    return (
        <div className="container-detail">
            {logement ? (
                <div>
                    <Caroussel pictures={logement.pictures}/>
                    <div className="container-detail">
                        <div className="container-title">
                            <div className="detail-title">
                                <h2>{logement.title}</h2>
                                <p>{logement.location}</p>
                            </div>
                            <div className="img-profil">
                                <div className="box-profil">
                                <p className="profil-name">
                                    {logement.host.name}
                                </p>
                                <img src={logement.host.picture} alt=""/>

                                </div>
                                <Star star={logement.rating}/>
                            </div>
                        </div>
                        <div className="detail-tag">
                            {logement.tags.map((tag, i) => (
                                <div key={i}><span>{tag}</span></div>

                            ))}
                        </div>
                        <div className="container-description">
                            <div className="collapse">
                                <Collapse description={logement.description} title={"Description"}/>
                            </div>
                            <Collapse description={logement.description} title={"Description"}/>
                        </div>
                    </div>

                </div>
            ) : (
                <h4 className="center">Aucun logement à afficher !</h4>
            )}
        </div>

    )
}
export default DetailLogement