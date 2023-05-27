import { useEffect, useState } from "react";
import defaultProfilePic from "../images/default-profile-pic.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const userData = JSON.parse(
                localStorage.getItem("libromatic_user")
            );
            if (userData) {
                setUser(userData);
            } else {
                navigate("/login");
            }
        } catch (error) {
            navigate("/login");
        }
    }, [navigate]);

    const handleImageNotFound = (e) => {
        e.target.src = defaultProfilePic;
    };

    const handleLogout = () => {
        localStorage.removeItem("libromatic_user");
        navigate("/login");
    };

    if (!user) {
        return null;
    }

    return (
        <div className="home">
            <h1>Welcome {user.username}</h1>
            <img
                src={user.profilePicture}
                alt="Profile Pic"
                onError={handleImageNotFound}
            />
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;
