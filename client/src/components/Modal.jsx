import "../styles/Modal.css";
import defaultProfilePic from "../images/default-profile-pic.jpg";
import ModalItem from "./ModalItem";
import { useContext } from "react";
import { UserContext } from "./App";

const Modal = () => {
    const [user] = useContext(UserContext);

    return (
        <div className="modal">
            <div>
                <img
                    src={defaultProfilePic}
                    alt="Profile pic"
                    className="modal-pic"
                />
            </div>
            <div className="modal-username">{user.username}</div>
            <div className="modal-email">{user.email}</div>
            <ModalItem path="/profile">Profile</ModalItem>
            <ModalItem path="/settings">Settings</ModalItem>
            <ModalItem path="/cart">My Cart</ModalItem>
            <ModalItem path="/orders">My Orders</ModalItem>
            <ModalItem logout>Logout</ModalItem>
        </div>
    );
};

export default Modal;
