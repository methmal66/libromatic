import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSubmit from "./FormSubmit";
import "../styles/FormInput.css";
import { loginUser } from "../services/userServices";

//TODO - Add inline validation for email and password
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.name === "Email") setEmail(e.target.value);
        if (e.target.name === "Password") setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser({ email, password }, navigate);
    };

    return (
        <div className="register">
            <form>
                <FormInput
                    name="Email"
                    placeholder="methmal@example.com"
                    handler={handleChange}
                    feedback={() => {}}
                />
                <FormInput
                    name="Password"
                    placeholder="Enter a strong password"
                    handler={handleChange}
                    feedback={() => {}}
                    password
                />
                <FormSubmit text="Login" handler={handleSubmit} />
            </form>
            <Link to="/register">Let's create an account?</Link>
        </div>
    );
};

export default Login;
