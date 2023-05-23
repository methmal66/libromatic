import bcrypt from "bcryptjs";
import { useState } from "react";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const handleChange = (e) => {
        if (e.target.name === "username") setUsername(e.target.value);
        if (e.target.name === "email") setEmail(e.target.value);
        if (e.target.name === "password") setPassword(e.target.value);
        if (e.target.name === "passwordConfirm")
            setPasswordConfirm(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            alert("Passwords do not match!");
            return;
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        fetch("http://localhost:8080/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                email,
                password: hashedPassword,
            }),
        })
            .then((res) => {
                if (res.status === 201) {
                    alert("User created successfully");
                } else {
                    alert("User creation failed" + res.status);
                }
            })
            .catch((err) => {
                console.log(err);
                alert("User creation failed");
            });
    };

    return (
        <div className="register">
            <form>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <input
                    type="password"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    placeholder="Confirm your password"
                    onChange={handleChange}
                />
                <br />
                <input type="submit" value="Submit" onClick={handleSubmit} />
            </form>
        </div>
    );
};

export default Register;
