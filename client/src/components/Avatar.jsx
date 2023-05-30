import defaultProfilePic from "../images/default-profile-pic.jpg";
import "../styles/Avatar.css";
import Modal from "./Modal";
import { useState } from "react";

//TODO - Popup modal on click
const Avatar = ({ user }) => {
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
            {isModalOpen && <Modal user={user && user} />}
        </div>
    );
};

export default Avatar;
