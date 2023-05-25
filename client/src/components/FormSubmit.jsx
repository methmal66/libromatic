import "../styles/FormSubmit.css";

const FormSubmit = ({ handler, password }) => {
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
