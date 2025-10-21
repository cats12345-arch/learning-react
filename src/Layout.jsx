import {Outlet, Link} from "react-router-dom";
import Header from "./componets/Header";
import Navigation from "./componets/Navigation";

const Layout = () => {
    return (
        <>
            <Header />
            <Navigation />

            <Outlet />
            
            <p>My footer</p>
        </>
    )
};

export default Layout;