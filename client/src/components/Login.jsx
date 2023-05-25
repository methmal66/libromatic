import { useState } from "react";
import bcrypt from "bcryptjs";
import FormInput from "./FormInput";
import FormSubmit from "./FormSubmit";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                    alert("Loggedin successfully!");
                } else {
                    alert("Loggin failed! " + res.status);
                }
            })
            .catch((err) => {
                console.log(err);
                alert("An error occured while logging in");
            });
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
        </div>
    );
};

export default Login;
