import { useRef, useState } from "react";
import "../styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import {
    isUsernameValid,
    isEmailValid,
    isPasswordValid,
    isConfirmPasswordValid,
} from "../validations/userValidations";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { registerUser } from "../services/userServices";

const Register = () => {
    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const passwordConfirm = useRef(false);
    const [usernameFeedback, setUsernameFeedback] = useState({ valid: true });
    const [emailFeedback, setEmailFeedback] = useState({ valid: true });
    const [passwordFeedback, setPasswordFeedback] = useState({ valid: true });
    const [passwordConfirmFeedback, setPasswordConfirmFeedback] = useState({
        valid: true,
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        registerUser(
            {
                username: username.current,
                email: email.current,
                password: password.current,
            },
            navigate
        );
    };

    const handleUsernameChange = async (e) => {
        const value = e.target.value;
        const { valid, message } = await isUsernameValid(value);
        setUsernameFeedback({ valid, message });
        if (valid) username.current = value;
        else username.current = null;
    };

    const handleEmailChange = async (e) => {
        const value = e.target.value;
        const { valid, message } = await isEmailValid(value);
        setEmailFeedback({ valid, message });
        if (valid) email.current = value;
        else email.current = null;
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        const { valid, message } = isPasswordValid(value);
        setPasswordFeedback({ valid, message });
        if (valid) password.current = value;
        else password.current = null;
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        const { valid, message } = isConfirmPasswordValid(
            value,
            password.current
        );
        setPasswordConfirmFeedback({ valid, message });
        passwordConfirm.current = valid;
    };

    return (
        <div className="register">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Username"
                        variant="outlined"
                        error={!usernameFeedback.valid}
                        helperText={usernameFeedback.message}
                        onChange={handleUsernameChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        error={!emailFeedback.valid}
                        helperText={emailFeedback.message}
                        onChange={handleEmailChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        type="password"
                        label="Password"
                        variant="outlined"
                        error={!passwordFeedback.valid}
                        helperText={passwordFeedback.message}
                        onChange={handlePasswordChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        type="password"
                        label="Confirm Password"
                        variant="outlined"
                        error={!passwordConfirmFeedback.valid}
                        helperText={passwordConfirmFeedback.message}
                        onChange={handleConfirmPasswordChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        size="large"
                        variant="contained"
                        onClick={handleSubmit}
                        disabled={
                            !username.current ||
                            !email.current ||
                            !password.current ||
                            !passwordConfirm.current
                        }
                    >
                        Register
                    </Button>
                </Grid>
            </Grid>
            <div className="register-link">
                <Link to="/login">Already have an account?</Link>
            </div>
        </div>
    );
};

export default Register;
