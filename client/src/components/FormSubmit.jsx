import "../styles/FormSubmit.css";

const FormSubmit = ({ handler }) => {
    return (
        <input
            className="form-submit"
            type="submit"
            value="Submit"
            onClick={handler}
        />
    );
};

export default FormSubmit;
