import React, {useEffect, useState} from 'react';
import "./carousel.css"
import chevronRight from "../../Assets/icones/chevronRight.svg"
import chevronLeft from "../../Assets/icones/chevronLeft.svg"

const Carousel = ({pictures}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [arrow, setArrow] = useState(pictures);

    useEffect(() => {
        if (pictures.length === 1) {
            setArrow("arrow-hidden");
        } else {
            setArrow(pictures)
        }
    }, [pictures]);

    const previousImage = () => {
        setCurrentImage(currentImage === 0 ? pictures.length - 1 : currentImage - 1);
    };

    const nextImage = () => {
        setCurrentImage(currentImage === pictures.length - 1 ? 0 : currentImage + 1);
    };

    return (
        <div>
            <section className="carousel">
                <div className="slides">
                    <div className="slide">
                        <img src={pictures[currentImage]} alt="Carousel"/>
                    </div>
                </div>
                <button className={`arrow prev ${arrow}`} onClick={previousImage}><img className="chevronLeft"
                                                                                       src={chevronLeft}
                                                                                       alt="bouton_précedent"/>
                </button>
                <button className={`arrow next ${arrow}`} onClick={nextImage}><img className="chevronRight"
                                                                                   src={chevronRight}
                                                                                   alt="bouton_suivant"/></button>
                <span className={`count-pictures ${arrow}`}>{currentImage + 1} /{pictures.length}</span>
            </section>
        </div>
    );
};
export default Carousel;
