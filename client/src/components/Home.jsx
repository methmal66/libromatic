import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./App";
import { getMe } from "../services/userServices";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;

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
            <Div>
                <Header />
            </Div>
        )
    );
};

export default Home;
