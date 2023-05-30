import Header from "./Header";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./App";

const Home = () => {
    const navigate = useNavigate();
    const [user] = useContext(UserContext);

    useEffect(() => {
        if (!user) navigate("/login");
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
