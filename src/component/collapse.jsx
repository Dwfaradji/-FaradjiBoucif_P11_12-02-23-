import React, {useState} from "react";
import './collapse.css'

let count = 0

const Collapse = (collapse) => {
    const [rotate, setRotate] = useState()
    const [style, setStyle] = useState()

    const onHideCollapse = () => {
        if (count === 0) {
            setStyle("hidden")
            setRotate("chevron-rotate")
            count++
        } else if (count === 1) {
            count--
            setStyle("")
            setRotate("")
        }
    }

    return (
        <div className="bloc-description">
            <div className="title">
                <h3>{collapse.title}</h3><span className={rotate} onClick={onHideCollapse}><i
                className={"fa-solid fa-chevron-down"}></i></span>
            </div>
            {!collapse.equipement ? (
                <div className={`texte ${style}`}>
                    <p>{collapse.description}</p>
                </div>
            ) : (
                <div className={`texte  ${style}`}>
                    <ul>
                        {collapse.equipement.map((equip, i) => (
                            <li key={i}>{equip}</li>
                        ))
                        }
                    </ul>

                </div>

            )}

        </div>
    )
}
export default Collapse