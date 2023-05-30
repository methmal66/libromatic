import "../styles/ModalItem.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./App";

const ModalItem = ({ children, path, logout }) => {
    const navigate = useNavigate();
    const [user, setUser] = useContext(UserContext);

    const handleOnClick = () => {
        if (logout) {
            localStorage.removeItem("libromatic_token");
            setUser(null);
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
