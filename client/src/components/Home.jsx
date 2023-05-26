//TODO - Logout button
import { useEffect, useState } from "react";
import defaultProfilePic from "../images/default-profile-pic.png";

const Home = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("libromatic_user")));
    }, []);

    const handleImageNotFound = (e) => {
        e.target.src = defaultProfilePic;
    };

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
