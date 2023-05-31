import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    isUsernameValid,
    isEmailValid,
    isPasswordValid,
    isConfirmPasswordValid,
} from "../validations/userValidations";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SignTextField from "./SignTextField";
import { registerUser } from "../services/userServices";
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
    margin-top: 25px;
`;

const Register = () => {
    const [username, setUsername] = useState({
        valid: true,
        validator: isUsernameValid,
    });
    const [email, setEmail] = useState({
        valid: true,
        validator: isEmailValid,
    });
    const [password, setPassword] = useState({
        valid: true,
        validator: isPasswordValid,
    });

    const [passwordConfirm, setPasswordConfirm] = useState({
        valid: true,
        validator: (value) => isConfirmPasswordValid(value, password.value),
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        registerUser(
            {
                username: username.value,
                email: email.value,
                password: password.value,
            },
            navigate
        );
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        const { valid, message } = isConfirmPasswordValid(
            value,
            password.value
        );
        setPasswordConfirm({ valid, message, value: valid ? value : null });
    };

    return (
        <Div>
            <Grid container spacing={3}>
                <SignTextField
                    state={username}
                    setState={setUsername}
                    label="Username"
                />
                <SignTextField
                    state={email}
                    setState={setEmail}
                    label="Email"
                />

                <SignTextField
                    state={password}
                    setState={setPassword}
                    label="Password"
                    password
                />

                <SignTextField
                    state={passwordConfirm}
                    setState={setPasswordConfirm}
                    label="Confirm Password"
                    password
                    handleChange={handleConfirmPasswordChange}
                />
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        size="large"
                        variant="contained"
                        onClick={handleSubmit}
                        disabled={
                            !username.value ||
                            !email.value ||
                            !password.value ||
                            !passwordConfirm.value
                        }
                    >
                        Register
                    </Button>
                </Grid>
            </Grid>
            <TopGap>
                <Link to="/login">Already have an account?</Link>
            </TopGap>
        </Div>
    );
};

export default Register;
