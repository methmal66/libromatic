import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
import FormSubmit from "./FormSubmit";

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
            .then((res) => {
                if (res.status === 200) {
                    alert("Login successful!");
                } else {
                    alert("Login failed! " + res.status);
                }
                return res.json();
            })
            .then((data) => {
                localStorage.setItem("libromatic_access_token", data.token);
                localStorage.setItem(
                    "libromatic_user",
                    JSON.stringify(data.user)
                );
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                alert("An error occured while logging in");
            });
    };

    //TODO - Option to remember the user
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
        </div>
    );
};

export default Login;
