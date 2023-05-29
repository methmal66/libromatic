import "../styles/App.css";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import UserContext from "../contexts/UserContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import usePresistUser from "../hooks/usePresistUser";

const App = () => {
    const user = usePresistUser();

    return (
        <div className="app">
            <UserContext.Provider value={user}>
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
