import "../styles/FormInput.css";

const FormInput = ({ name, placeholder, handler }) => {
    return (
        <div className="form-input">
            <label htmlFor={name}>{name}</label>
            <input
                className="form-text-input"
                type="text"
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={handler}
            />
        </div>
    );
};

export default FormInput;
