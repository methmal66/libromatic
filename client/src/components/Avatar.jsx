import defaultProfilePic from "../images/default-profile-pic.jpg";
import "../styles/Avatar.css";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import Modal from "./Modal";

//TODO - Popup modal on click
const Avatar = () => {
    const user = useContext(UserContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOnClick = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="avatar" onClick={handleOnClick}>
            <img
                className="avatar-pic"
                src={defaultProfilePic}
                alt="Profile pic"
            />
            {isModalOpen && <Modal />}
        </div>
    );
};

export default Avatar;
