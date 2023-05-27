import { useState } from "react";
import "../styles/Register.css";
import FormInput from "./FormInput";
import FormSubmit from "./FormSubmit";
import { Link, useNavigate } from "react-router-dom";
import {
    validateConfirmPassword,
    validateEmail,
    validatePassword,
    validateUsername,
} from "../validations/userValidations";
import { registerUser } from "../services/userServices";

//TODO - Center this div properly
//TODO - Validate if username and email are already taken
//TODO - Add colos to forms
const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState(false);
    const [usernameFeedback, setUsernameFeedback] = useState({ valid: false });
    const [emailFeedback, setEmailFeedback] = useState({ valid: false });
    const [passwordFeedback, setPasswordFeedback] = useState({ valid: false });
    const [passwordConfirmFeedback, setPasswordConfirmFeedback] = useState({
        valid: false,
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!passwordConfirm) {
            alert("Passwords do not match!");
            return;
        }
        registerUser({ username, email, password }, navigate);
    };

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        validateUsername(value, setUsername, setUsernameFeedback);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        validateEmail(value, setEmail, setEmailFeedback);
    };

    //FIXME - Confirm password is not compared when password change
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        validatePassword(value, setPassword, setPasswordFeedback);
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        validateConfirmPassword(
            value,
            password,
            setPasswordConfirm,
            setPasswordConfirmFeedback
        );
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
                        !usernameFeedback.valid ||
                        !emailFeedback.valid ||
                        !passwordFeedback.valid ||
                        !passwordConfirmFeedback.valid
                    }
                />
            </form>
            <Link to="/login">Already have an account?</Link>
        </div>
    );
};

export default Register;
