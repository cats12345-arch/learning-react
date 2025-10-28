import {Outlet, Link} from "react-router-dom";
import Header from "./componets/Header";
import Navigation from "./componets/Navigation";
import Footer from "./componets/Footer";

const Layout = () => {
    return (
        <div id="content">
            <Header />
            <Navigation />

            <Outlet />
            
            <Footer />
        </div>
    );
};

export default Layout;