import defaultProfilePic from "./default-profile-pic.jpg";
import Modal from "./Modal";
import { useState, useContext } from "react";
import { UserContext } from "../App";
import styled from "styled-components";

const Div = styled.div`
    position: relative;
`;

const Pic = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
    display: block;
    border: 3px solid #fff;
    box-shadow: 0 0 0 3px #2d2d2d;
    transition: all 0.3s ease;
    cursor: pointer;
`;

const Avatar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [user] = useContext(UserContext);

    const handleOnClick = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <Div onClick={handleOnClick}>
            <Pic
                src={user.profilePic ? user.profilePic : defaultProfilePic}
                alt="Profile pic"
            />
            {isModalOpen && <Modal />}
        </Div>
    );
};

export default Avatar;
