import React from "react";
import BackgroundPicture from "../component/background-picture";
import img from '../images/background-image2.png'
import Collapse from "../component/collapse";
import './a-propos.css'

const APropos = () => {
    const textCollapse = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    return (
        <div>
            <BackgroundPicture picture={img}/>
            <div className="container-collapse">
                <Collapse title={"Fiabilité"} description={textCollapse}/>
                <Collapse title={"Respect"}/>
                <Collapse title={"Service"}/>
                <Collapse title={"Responsabilité"}/>
            </div>
        </div>
    )
}
export default APropos