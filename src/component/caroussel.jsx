import React from "react"
import "./caroussel.css"
import chevronRight from "../images/Vector.svg"
import chevronLeft from "../images/Vector-2.svg"

const Caroussel = ({detail}) => {
    console.log(detail.pictures)
    return (
        <div>
            <section className="carousel">
                <div className="slides">
                    {/*image du caroussel*/}
                    <div className="slide">
                        <img src={detail.pictures[0]} alt=""/>
                    </div>

                </div>
                {/*navigation caroussel*/}
                <a className="arrow prev" href="#"> <img className="chevronLeft" src={chevronLeft} alt=""/></a>
                <a className="arrow next" href="#"> <img className="chevronRight" src={chevronRight} alt=""/></a>
            </section>
        </div>
    )
}
export default Caroussel
