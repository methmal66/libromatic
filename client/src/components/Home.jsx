import { useEffect, useContext } from "react";
import defaultProfilePic from "../images/default-profile-pic.png";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

//TODO - Read user from useContext
const Home = () => {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) navigate("/login");
    }, [user]);

    const handleImageNotFound = (e) => {
        e.target.src = defaultProfilePic;
    };

    const handleLogout = () => {
        setUser(null);
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
