import {useState, useEffect} from "react";
import axios from "axios";
import "./../css/House.css";
import House from "../components/House";
import AddHouse from "./AddHouseDialog";

const HouseList = (props) => {
    const [houses, setHouses] = useState([]);

    const [AddDialog, setShowAddDialog] = useState(false);

    const openAddDialog = () => {
        setShowAddDialog(true);
    }

    const closeAddDialog = () => {
        setShowAddDialog(false);
    }

    //after page has loaded
    useEffect(()=>{
        const loadHouses = async() => {
            const response = await axios.get("https://server-houses.onrender.com/api/houses");
            setHouses(response.data.splice(0,props.num));
        };

        loadHouses();
    },[]);

    return (
        <div id="house-list" className="columns">
            <button id="add-house" onClick={openAddDialog}>+</button>
            {setShowAddDialog?(<AddHouse closeAddDialog={closeAddDialog}
                                         updateHouses={updateHouses}/>): ("")}
            {houses.map((house)=>(
                <House  key={house._id} 
                        id={house._id}
                        name={house.name} 
                        size={house.size}
                        bedrooms={house.bedrooms}
                        bathrooms={house.bathrooms}
                        main_image={house.main_image}
                        features={house.features} />
            ))}
        </div>
    )
};

export default HouseList;