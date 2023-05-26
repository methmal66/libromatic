import { useEffect, useState } from "react";
import defaultProfilePic from "../images/default-profile-pic.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        //BUG : JSON parse undefined error
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

    if (!user) {
        return null; // or you can render a loading spinner
    }

    return (
        <div className="home">
            <h1>Welcome {user.username}</h1>
            <img
                src={user.profilePicture}
                alt="Profile Pic"
                onError={handleImageNotFound}
            />
        </div>
    );
};

export default Home;
