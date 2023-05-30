import "../styles/Header.css";
import Avatar from "./Avatar";
import { useEffect, useState } from "react";
import { getMe } from "../services/userServices";

const Header = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getMe()
            .then((user) => setUser(user))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="header">
            <Avatar user={user} />
        </div>
    );
};

export default Header;
