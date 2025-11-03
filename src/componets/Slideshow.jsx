import "./../css/Slideshow.css";
import { useState } from "react";

const Slideshow = () => {

    let [slideIndex, setSlideIndex] = useState(0);

    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg$|webp)/)
    );

    const slideFoward = () => {
        setSlideIndex(slideIndex < images.length -1? slideIndex+1 : 0)
    };

    const slideBackward = () => {
        setSlideIndex(slideIndex >= 1? slideIndex-1:images.length-1);
    };

    return (
        <section id="slideshow">
            <img src={images[slideIndex]} />
            <a onClick={(e) => {
                e.preventDefault();
                slideFoward();
                }} id="right-arrow" className="arrow" href="#">&gt;</a>
            <a onClick={(e) => {
                e.preventDefault();
                slideBackward();}} id="left-arrow" className="arrow" href="#">&lt;</a>
        </section>
    );
};

export default Slideshow;
    