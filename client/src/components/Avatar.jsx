import defaultProfilePic from "../images/default-profile-pic.jpg";
import "../styles/Avatar.css";
import Modal from "./Modal";
import { useState } from "react";

const Avatar = () => {
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
