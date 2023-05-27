import { findUserByUsername, findUserByEmail } from "../services/userServices";

export const validateUsername = async (value, setValue, setFeedback) => {
    const pattern = /^[a-zA-Z0-9_]{4,16}$/;

    if (pattern.test(value)) {
        const user = await findUserByUsername(value);
        console.log(user);
        if (user) {
            return setFeedback({
                valid: false,
                message: " is already taken",
            });
        }
        setValue(value);
        return setFeedback({
            valid: true,
            message: " is valid",
        });
    }

    if (value.length < 4)
        return setFeedback({
            valid: false,
            message: " should be longer than 4 characters",
        });

    if (value.length > 16)
        return setFeedback({
            valid: false,
            message: " cannot exceed 16 characters",
        });

    setFeedback({
        valid: false,
        message: " cannot include special characters",
    });
};

export const validateEmail = async (value, setValue, setFeedback) => {
    const pattern = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/;

    if (pattern.test(value)) {
        const user = await findUserByEmail(value);
        if (user) {
            return setFeedback({
                valid: false,
                message: " is already taken",
            });
        }
        setValue(value);
        return setFeedback({
            valid: true,
            message: " is valid",
        });
    }
    setFeedback({
        valid: false,
        message: " is invalid",
    });
};

export const validatePassword = (value, setValue, setFeedback) => {
    const pattern =
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,16}$/;

    if (pattern.test(value)) {
        setValue(value);
        return setFeedback({
            valid: true,
            message: " is valid",
        });
    }

    if (value.length < 8) {
        return setFeedback({
            valid: false,
            message: " should longer than 8 characters",
        });
    }

    if (value.length > 70) {
        return setFeedback({
            valid: false,
            message: " cannot exceed 70 characters",
        });
    }

    // Check for specific invalid patterns
    if (!/[a-zA-Z]/.test(value)) {
        return setFeedback({
            valid: false,
            message: " should have at least one letter",
        });
    }

    if (!/[0-9]/.test(value)) {
        return setFeedback({
            valid: false,
            message: " should have at least one digit",
        });
    }

    setFeedback({
        valid: false,
        message: " should have a special character",
    });
};

export const validateConfirmPassword = (
    confirmPassword,
    password,
    setValue,
    setFeedback
) => {
    if (confirmPassword === password) {
        setValue(true);
        return setFeedback({
            valid: true,
            message: " matches",
        });
    }

    setFeedback({
        valid: false,
        message: " does not match",
    });
};
