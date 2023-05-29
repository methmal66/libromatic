import "../styles/ModalItem.css";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

const ModalItem = ({ children, path, logout }) => {
    const navigate = useNavigate();
    const user = useContext(UserContext);

    const handleOnClick = () => {
        if (logout) {
            user.actions.removeUser();
            navigate("/login");
            return;
        }
        navigate(path);
    };

    return (
        <div
            className={logout ? "modal-item modal-item-logout" : "modal-item"}
            onClick={handleOnClick}
        >
            <span className="modal-item-text">{children}</span>
        </div>
    );
};

export default ModalItem;
