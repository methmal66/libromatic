import { useContext, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSubmit from "./FormSubmit";
import "../styles/FormInput.css";
import { loginUser } from "../services/userServices";
import UserContext from "../contexts/UserContext";

//TODO - Add feature to remember user
const Login = () => {
    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();
    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        if (user) navigate("/");
    }, [user]);

    const handleChange = (e) => {
        if (e.target.name === "Email") email.current = e.target.value;
        if (e.target.name === "Password") password.current = e.target.value;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loggedUser = await loginUser({
            email: email.current,
            password: password.current,
        });
        setUser(loggedUser);
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
