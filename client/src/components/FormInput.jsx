import "../styles/FormInput.css";

const FormInput = ({ name, password, placeholder, handler }) => {
    return (
        <div className="form-input">
            <label className="form-input-label" htmlFor={name}>
                {name}
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
