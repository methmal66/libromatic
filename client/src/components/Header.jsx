import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import "../styles/Header.css";
import Avatar from "./Avatar";

const Header = () => {
    const [user, setUser] = useContext(UserContext);

    return (
        <div className="header">
            <Avatar />
        </div>
    );
};

export default Header;
