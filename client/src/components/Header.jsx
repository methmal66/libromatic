import Avatar from "./Avatar";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    height: 50px;
    width: 100%;
    background-color: #aaaaaa;
    color: white;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
`;

const Header = () => {
    return (
        <Div>
            <Avatar />
        </Div>
    );
};

export default Header;
