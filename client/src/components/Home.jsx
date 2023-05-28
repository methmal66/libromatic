import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import Header from "./Header";
import "../styles/Home.css";

const Home = () => {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) navigate("/login");
    }, [user]);

    const handleLogout = () => {
        setUser(null);
        navigate("/login");
    };

    if (!user) {
        return null;
    }

    return (
        <div className="home">
            <Header />
            <button className="logout" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Home;
