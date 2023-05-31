import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const SignTextField = ({ state, setState, label }) => {
    const handleChange = async (e) => {
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
                label={label}
                variant="outlined"
                onChange={handleChange}
            />
        </Grid>
    );
};

export default SignTextField;
