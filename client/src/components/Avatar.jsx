import defaultProfilePic from "../images/default-profile-pic.jpg";
import "../styles/Avatar.css";
import Modal from "./Modal";
import { useState } from "react";

//TODO - Popup modal on click
const Avatar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOnClick = () => {
        console.log("clicked on avatar");
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
