import defaultProfilePic from "../images/default-profile-pic.jpg";
import "../styles/Avatar.css";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Avatar = () => {
    const [user] = useContext(UserContext);

    return (
        <div className="avatar">
            <img
                className="profile-pic"
                src={user.profilePic ? user.profilePic : defaultProfilePic}
                alt="profile-pic"
            />
        </div>
    );
};

export default Avatar;
