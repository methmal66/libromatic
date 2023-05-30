import "../styles/FormSubmit.css";

const FormSubmit = ({ handler, disabled }) => {
    return (
        <input
            className={disabled ? "form-submit-disabled" : "form-submit"}
            type="submit"
            value="Submit"
            onClick={handler}
            disabled={disabled}
        />
    );
};

export default FormSubmit;
