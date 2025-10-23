import "./../css/Header.css";
import logo from "../images/house-logo.jpg";

const Header = () => {
    return (
        <div id="main-header">
            <img id="logo" src={logo} alt="Logo" />
            <h1>Dogs</h1>
        </div>
    );
};

export default Header;