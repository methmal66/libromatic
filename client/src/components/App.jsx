import "../styles/App.css";
import Register from "./Register";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
