import "../styles/Modal.css";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import defaultProfilePic from "../images/default-profile-pic.jpg";
import ModalItem from "./ModalItem";

const Modal = () => {
    const user = useContext(UserContext);

    return (
        <div className="modal">
            <div>
                <img
                    src={defaultProfilePic}
                    alt="Profile pic"
                    className="modal-pic"
                />
            </div>
            <div className="modal-username">{user.data.username}</div>
            <div className="modal-email">{user.data.email}</div>
            <ModalItem path="/profile">Profile</ModalItem>
            <ModalItem path="/settings">Settings</ModalItem>
            <ModalItem path="/cart">My Cart</ModalItem>
            <ModalItem path="/orders">My Orders</ModalItem>
            <ModalItem logout>Logout</ModalItem>
        </div>
    );
};

export default Modal;
