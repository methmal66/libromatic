import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import styled from "styled-components";

export const UserContext = createContext();

const Div = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <Div>
            <UserContext.Provider value={[user, setUser]}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </Div>
    );
};

export default App;
