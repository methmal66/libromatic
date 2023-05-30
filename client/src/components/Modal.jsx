import "../styles/Modal.css";
import defaultProfilePic from "../images/default-profile-pic.jpg";
import ModalItem from "./ModalItem";
import { useEffect, useState } from "react";
import { getMe } from "../services/userServices";

const Modal = ({ user }) => {
    return (
        <div className="modal">
            <div>
                <img
                    src={defaultProfilePic}
                    alt="Profile pic"
                    className="modal-pic"
                />
            </div>
            <div className="modal-username">{user && user.username}</div>
            <div className="modal-email">{user && user.email}</div>
            <ModalItem path="/profile">Profile</ModalItem>
            <ModalItem path="/settings">Settings</ModalItem>
            <ModalItem path="/cart">My Cart</ModalItem>
            <ModalItem path="/orders">My Orders</ModalItem>
            <ModalItem logout>Logout</ModalItem>
        </div>
    );
};

export default Modal;
