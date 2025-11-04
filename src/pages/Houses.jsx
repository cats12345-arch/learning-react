import "./../css/Houses.css";
import House from "../componets/House";
import {useState, useEffect} from "react";
import axios from "axios";

const Houses = () => {
    return (
        <div id="houses" className="main-content">
            <h2>Houses</h2>
            <div className="columns">
                <House name="Farm House" num_bedrooms="5"/>
                <House name="Mansion" num_bedrooms="10"/>
                <House name="Family Home" num_bedrooms="5"/>
            </div>
        </div>
    );
};

export default Houses;