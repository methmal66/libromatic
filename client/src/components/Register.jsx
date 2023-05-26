import { useState } from "react";
import "../styles/Register.css";
import FormInput from "./FormInput";
import FormSubmit from "./FormSubmit";
import { useNavigate } from "react-router-dom";

//TODO - Center this div properly
const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.name === "Username") setUsername(e.target.value);
        if (e.target.name === "Email") setEmail(e.target.value);
        if (e.target.name === "Password") setPassword(e.target.value);
        if (e.target.name === "Password Confirm")
            setPasswordConfirm(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
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
                if (res.status === 201) {
                    alert("User created successfully!");
                    navigate("/login");
                } else {
                    alert("User creation failed! " + res.status);
                }
            })
            .catch((err) => {
                alert("An error occured while registering");
            });
    };

    return (
        <div className="register">
            <form>
                <FormInput
                    name="Username"
                    placeholder="Sanuja Methmal"
                    handler={handleChange}
                />
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
                <FormInput
                    name="Password Confirm"
                    placeholder="Enter the password again"
                    handler={handleChange}
                    password
                />
                <FormSubmit handler={handleSubmit} />
            </form>
        </div>
    );
};

export default Register;
