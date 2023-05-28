import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import Header from "./Header";
import "../styles/Home.css";

const Home = () => {
    const [user] = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) navigate("/login");
    }, [user]);

    if (!user) {
        return null;
    }

    return (
        <div className="home">
            <Header />
        </div>
    );
};

export default Home;
