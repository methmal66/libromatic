import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { getMe, loginUser } from "../services/userServices";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./App";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    padding: 15px;
    width: 300px;
    border: 1px solid #aaaaaa;
    border-radius: 8px;
    background-color: rgb(250, 250, 250);
`;

const TopGap = styled.div`
    margin-top: 15px;
`;

const Login = () => {
    const email = useRef(null);
    const password = useRef(null);
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.name === "Email") email.current = e.target.value;
        if (e.target.name === "Password") password.current = e.target.value;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser({
            email: email.current,
            password: password.current,
        })
            .then(() => getMe())
            .then((user) => setUser(user))
            .then(() => navigate("/"))
            .catch((err) => console.log(err));
    };

    return (
        <Div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        name="Email"
                        label="Email"
                        variant="outlined"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        type="password"
                        name="Password"
                        label="Password"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        size="large"
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        Login
                    </Button>
                </Grid>
            </Grid>
            <TopGap>
                <Link to="/register">Let's create an account?</Link>
            </TopGap>
        </Div>
    );
};

export default Login;
