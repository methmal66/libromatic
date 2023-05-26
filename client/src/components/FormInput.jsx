import "../styles/FormInput.css";

const FormInput = ({ name, password, placeholder, handler, feedback }) => {
    return (
        <div className="form-input">
            <label className="form-input-label" htmlFor={name}>
                {name}
                <span
                    className={
                        feedback.valid
                            ? "form-input-valid-feedback"
                            : "form-input-invalid-feedback"
                    }
                >
                    {feedback && feedback.message}
                </span>
            </label>
            <input
                className="form-text-input"
                type={password ? "password" : "text"}
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={handler}
            />
        </div>
    );
};

export default FormInput;
