import Header from "./Header";
import "../styles/Home.css";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
    const token = localStorage.getItem("libromatic_token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) navigate("/login");
    }, []);

    return (
        token && (
            <div className="home">
                <Header />
            </div>
        )
    );
};

export default Home;
