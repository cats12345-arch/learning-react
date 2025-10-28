import "./../css/Slideshow.css";
import { useState } from "react";

const Slideshow = () => {

    const[slideIndex, setSlideIndex] = useState(0);

    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg$|webp)/)
    );

    return (
        <section id="slideshow">
            <img src={images[slideIndex]} />
            <a id="right-arrow" className="arrow" href="#">&gt;</a>
             <a id="left-arrow" className="arrow" href="#">&gt;</a>
        </section>
    );
};

export default Slideshow;
    