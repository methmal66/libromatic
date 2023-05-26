import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSubmit from "./FormSubmit";
import "../styles/FormInput.css";

//FIXME - Cannot read property 'valid' of undefined
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.name === "Email") setEmail(e.target.value);
        if (e.target.name === "Password") setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => alert(data.message))
            .then((data) => {
                localStorage.setItem("libromatic_access_token", data.token);
                localStorage.setItem(
                    "libromatic_user",
                    JSON.stringify(data.user)
                );
                navigate("/");
            })
            .catch((error) => alert(error));
    };

    return (
        <div className="register">
            <form>
                <FormInput
                    name="Email"
                    placeholder="methmal@example.com"
                    handler={handleChange}
                />
                <FormInput
                    name="Password"
                    placeholder="Enter a strong password"
                    handler={handleChange}
                    password
                />
                <FormSubmit text="Login" handler={handleSubmit} />
            </form>
            <Link to="/register">Let's create an account?</Link>
        </div>
    );
};

export default Login;
