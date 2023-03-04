import React, {useRef, useState, useEffect} from "react";
import './collapse.css'


const Collapse = (collapse) => {
    const [rotate, setRotate] = useState()
    const [style, setStyle] = useState()
    const [count, setCount] = useState(0)
    const blocRef = useRef();

    const onHideCollapse = () => {
        if (count === 0) {
            setStyle("hidden")
            setRotate("chevron-rotate")
            setCount(count + 1)
        } else {
            setCount(count - 1)
            setStyle("")
            setRotate("")
        }
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (blocRef.current && !blocRef.current.contains(event.target)) {
                setCount(0);
                setStyle("");
                setRotate("");
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [blocRef]);

    return (
        <div ref={blocRef} className="bloc-description">
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