import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const SignTextField = ({
    state,
    setState,
    label,
    error,
    password,
    handleChange,
}) => {
    const _handleChange = async (e) => {
        const text = e.target.value;
        const { valid, message } = await state.validator(text);
        setState({
            ...state,
            valid,
            message,
            value: valid ? text : null,
        });
    };

    return (
        <Grid item xs={12}>
            <TextField
                fullWidth
                type={password ? "password" : "text"}
                label={label}
                variant="outlined"
                onChange={handleChange ? handleChange : _handleChange}
                error={error ? error : !state.valid}
                helperText={!state.valid ? state.message : null}
            />
        </Grid>
    );
};

export default SignTextField;
