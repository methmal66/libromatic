import Header from "./Header";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./App";
import { getMe } from "../services/userServices";

const Home = () => {
    const navigate = useNavigate();
    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        getMe().then((user) => {
            if (!user) navigate("/login");
            else setUser(user);
        });
    }, []);

    return (
        user && (
            <div className="home">
                <Header />
            </div>
        )
    );
};

export default Home;
