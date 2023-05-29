import "../styles/ModalItem.css";
import { useNavigate } from "react-router-dom";

const ModalItem = ({ children, path, logout }) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        if (logout) {
            localStorage.removeItem("libromatic_token");
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
