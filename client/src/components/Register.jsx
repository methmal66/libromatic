import { useState } from "react";
import "../styles/Register.css";
import FormInput from "./FormInput";
import FormSubmit from "./FormSubmit";
import { Link, useNavigate } from "react-router-dom";

//TODO - Center this div properly
//TODO - Inline validation
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

        fetch("http://localhost:8080/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                email,
                password,
            }),
        })
            .then((res) => {
                if (res.status === 200) navigate("/login");
                return res.json();
            })
            .then((data) => alert(data.message))
            .catch((error) => alert(error));
    };

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        const pattern = /^[a-zA-Z0-9_]{4,16}$/;

        if (pattern.test(value)) {
            setUsername(value);
            return setUsernameFeedback({
                valid: true,
                message: " is valid",
            });
        }

        if (value.length < 4)
            return setUsernameFeedback({
                valid: false,
                message: " should be longer than 4 characters",
            });

        if (value.length > 16)
            return setUsernameFeedback({
                valid: false,
                message: " cannot exceed 16 characters",
            });

        return setUsernameFeedback({
            valid: false,
            message: " cannot include special characters",
        });
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        const pattern = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/;

        if (pattern.test(value)) {
            setEmail(value);
            return setEmailFeedback({
                valid: true,
                message: " is valid",
            });
        }
        return setEmailFeedback({
            valid: false,
            message: " is invalid",
        });
    };

    //FIXME - Confirm password is not compared when password change
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        const pattern =
            /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,16}$/;

        if (pattern.test(value)) {
            setPassword(value);
            return setPasswordFeedback({
                valid: true,
                message: " is valid",
            });
        }

        if (value.length < 8) {
            return setPasswordFeedback({
                valid: false,
                message: " should longer than 8 characters",
            });
        }

        if (value.length > 70) {
            return setPasswordFeedback({
                valid: false,
                message: " cannot exceed 70 characters",
            });
        }

        // Check for specific invalid patterns
        if (!/[a-zA-Z]/.test(value)) {
            return setPasswordFeedback({
                valid: false,
                message: " should have at least one letter",
            });
        }

        if (!/[0-9]/.test(value)) {
            return setPasswordFeedback({
                valid: false,
                message: " should have at least one digit",
            });
        }

        return setPasswordFeedback({
            valid: false,
            message: " should have a special character",
        });
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;

        if (value === password) {
            setPasswordConfirm(true);
            return setPasswordConfirmFeedback({
                valid: true,
                message: " matches",
            });
        }

        return setPasswordConfirmFeedback({
            valid: false,
            message: " does not match",
        });
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
