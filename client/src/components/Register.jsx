import { useRef, useState } from "react";
import "../styles/Register.css";
import FormInput from "./FormInput";
import FormSubmit from "./FormSubmit";
import { Link, useNavigate } from "react-router-dom";
import {
    isUsernameValid,
    isEmailValid,
    isPasswordValid,
    isConfirmPasswordValid,
} from "../validations/userValidations";
import { registerUser } from "../services/userServices";

//TODO - Center this div properly
//TODO - Add colos to forms
const Register = () => {
    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const passwordConfirm = useRef(false);
    const [usernameFeedback, setUsernameFeedback] = useState({ valid: false });
    const [emailFeedback, setEmailFeedback] = useState({ valid: false });
    const [passwordFeedback, setPasswordFeedback] = useState({ valid: false });
    const [passwordConfirmFeedback, setPasswordConfirmFeedback] = useState({
        valid: false,
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
            <form className="register-form">
                <FormInput
                    name="Username"
                    placeholder="methmal13"
                    handler={handleUsernameChange}
                    feedback={usernameFeedback}
                />
                <FormInput
                    name="Email"
                    placeholder="methmal@example.com"
                    handler={handleEmailChange}
                    feedback={emailFeedback}
                />
                <FormInput
                    name="Password"
                    placeholder="Enter a strong password"
                    handler={handlePasswordChange}
                    feedback={passwordFeedback}
                    password
                />
                <FormInput
                    name="Password Confirm"
                    placeholder="Enter the password again"
                    handler={handleConfirmPasswordChange}
                    feedback={passwordConfirmFeedback}
                    password
                />
                <FormSubmit
                    handler={handleSubmit}
                    disabled={
                        !username.current ||
                        !email.current ||
                        !password.current ||
                        !passwordConfirm.current
                    }
                />
            </form>
            <Link to="/login">Already have an account?</Link>
        </div>
    );
};

export default Register;
