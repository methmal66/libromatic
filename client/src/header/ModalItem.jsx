import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";
import styled from "styled-components";

const Div = styled.div`
    height: 30px;
    padding-left: 10px;
    display: flex;
    align-items: center;

    :hover {
        background-color: white;
    }
`;

const Text = styled.span`
    font-size: 1rem;
    font-weight: normal;
    color: ${(props) => (props.color === "red" ? "red" : "black")};
`;

const ModalItem = ({ children, path, logout, color }) => {
    const navigate = useNavigate();
    const [user, setUser] = useContext(UserContext);

    const handleOnClick = () => {
        if (logout) {
            localStorage.removeItem("libromatic_token");
            setUser(null);
            navigate("/login");
            return;
        }
        navigate(path);
    };

    return (
        <Div onClick={handleOnClick}>
            <Text color={color}>{children}</Text>
        </Div>
    );
};

export default ModalItem;
