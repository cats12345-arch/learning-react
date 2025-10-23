import "./../css/House.css";
import housePic from "../images/house.jpg";

const House = (props) => {
    return (
        <section className="house">
            <h2>{props.name}</h2>
            <img src={housePic} alt="house" />
            <p>Num Bedrooms: {props.num_bedrooms}</p>
        </section>
    );
};

export default House;