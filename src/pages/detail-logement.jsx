import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import datas from "../Api/annonces-logements.json"
import Caroussel from "../component/caroussel";
import "../component/detail-logement.css"


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
    console.log(logement)

    return (
        <div>
            {logement ? (
                <div>
                    <Caroussel detail={logement}/>
                    <div className="container-detail">
                        <div className="container-title">
                        <div className="detail-title">
                            <h2>{logement.title}</h2>
                            <p>{logement.location}</p>
                        </div>
                        <div className="img-profil">
                            <p className="profil-name">
                                {logement.host.name}
                            </p>
                            <img src={logement.host.picture} alt=""/>
                        </div>
                        </div>
                        <div className="detail-tag">
                            {logement.tags.map((tag, i) => (
                                <div key={i}><span>{tag}</span></div>

                            ))}
                        </div>

                        <div className="container-description">
                            <div className="bloc-description">
                                <div className="title">
                                    <h3>Description</h3>
                                </div>

                                <div className="texte">
                                    <p>{logement.description}</p>
                                </div>
                            </div>
                            <div className="bloc-equipement">
                                <div className="title">
                                    <h3>Équipements</h3>
                                </div>
                                <div className="detail">
                                    <ul>
                                        {logement.equipments.map((equipement, i) => (
                                            <div key={i}>
                                                <li>{equipement}</li>
                                            </div>
                                        ))}
                                    </ul>
                                </div>

                            </div>
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