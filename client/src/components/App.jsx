import "../styles/App.css";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import UserContext from "../contexts/UserContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

//TODO - Load current loged in user from local storage
const App = () => {
    const [user, setUser] = useState(null);

    return (
        <div className="app">
            <UserContext.Provider value={[user, setUser]}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </div>
    );
};

export default App;
