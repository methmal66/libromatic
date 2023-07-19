import { isUsernameExist, isEmailExist } from "./services";

export const isUsernameValid = async (input) => {
    const pattern = /^[a-zA-Z0-9_]{4,16}$/;

    if (pattern.test(input)) {
        const exist = await isUsernameExist(input);
        if (exist) {
            return {
                valid: false,
                message: " is already taken",
            };
        }
        return {
            valid: true,
            message: " is valid",
        };
    }

    if (input.length < 4)
        return {
            valid: false,
            message: " should be longer than 4 characters",
        };

    if (input.length > 16)
        return {
            valid: false,
            message: " cannot exceed 16 characters",
        };

    return {
        valid: false,
        message: " cannot include special characters",
    };
};

export const isEmailValid = async (input) => {
    const pattern = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/;

    if (pattern.test(input)) {
        const exist = await isEmailExist(input);
        if (exist) {
            return {
                valid: false,
                message: " is already taken",
            };
        }
        return {
            valid: true,
            message: " is valid",
        };
    }
    return {
        valid: false,
        message: " is invalid",
    };
};

export const isPasswordValid = (input) => {
    const pattern =
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,70}$/;

    if (pattern.test(input)) {
        return {
            valid: true,
            message: " is valid",
        };
    }

    if (input.length < 8) {
        return {
            valid: false,
            message: " should longer than 8 characters",
        };
    }

    if (input.length > 70) {
        return {
            valid: false,
            message: " cannot exceed 70 characters",
        };
    }

    // Check for specific invalid patterns
    if (!/[a-zA-Z]/.test(input)) {
        return {
            valid: false,
            message: " should have at least one letter",
        };
    }

    if (!/[0-9]/.test(input)) {
        return {
            valid: false,
            message: " should have at least one digit",
        };
    }

    return {
        valid: false,
        message: " should have a special character",
    };
};

export const isConfirmPasswordValid = (input, password) => {
    if (input === password) {
        return {
            valid: true,
            message: " matches",
        };
    }

    return {
        valid: false,
        message: " does not match",
    };
};
