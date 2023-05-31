import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/FormInput.css";
import { getMe, loginUser } from "../services/userServices";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./App";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
    const email = useRef(null);
    const password = useRef(null);
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.name === "Email") email.current = e.target.value;
        if (e.target.name === "Password") password.current = e.target.value;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser({
            email: email.current,
            password: password.current,
        })
            .then(() => getMe())
            .then((user) => setUser(user))
            .then(() => navigate("/"))
            .catch((err) => console.log(err));
    };

    return (
        <div className="register">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        name="Email"
                        label="Email"
                        variant="outlined"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        type="password"
                        name="Password"
                        label="Password"
                        onChange={handleChange}
                        password
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button
                        fullWidth
                        size="large"
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        Login
                    </Button>
                </Grid>
            </Grid>
            <div className="register-link">
                <Link to="/register">Let's create an account?</Link>
            </div>
        </div>
    );
};

export default Login;
