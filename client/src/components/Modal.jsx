import defaultProfilePic from "../images/default-profile-pic.jpg";
import ModalItem from "./ModalItem";
import { useContext } from "react";
import { UserContext } from "./App";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 40px;
    right: 5px;
    width: 200px;
    height: auto;
    padding-top: 25px;
    padding-bottom: 5px;
    border: 1px solid black;
    border-radius: 8px;
    color: black;
    background-color: rgb(240, 240, 240);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.7);
`;

const Pic = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

const Username = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 10px;
`;

const Email = styled.div`
    font-size: 0.8rem;
    font-weight: normal;
    margin-bottom: 10px;
`;

const Modal = () => {
    const [user] = useContext(UserContext);

    return (
        <Div>
            <div>
                <Pic
                    src={user.profilePic ? user.profilePic : defaultProfilePic}
                    alt="Profile pic"
                />
            </div>
            <Username>{user.username}</Username>
            <Email>{user.email}</Email>
            <ModalItem path="/profile">Profile</ModalItem>
            <ModalItem path="/settings">Settings</ModalItem>
            <ModalItem path="/cart">My Cart</ModalItem>
            <ModalItem path="/orders">My Orders</ModalItem>
            <ModalItem logout color="red">
                Logout
            </ModalItem>
        </Div>
    );
};

export default Modal;
