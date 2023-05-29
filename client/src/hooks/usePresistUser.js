import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            localStorage.setItem(
                "libromatic_user",
                JSON.stringify(action.payload)
            );
            return action.payload;
        case "REMOVE_USER":
            localStorage.removeItem("libromatic_user");
            return null;
        default:
            return state;
    }
};

const initialState = JSON.parse(localStorage.getItem("libromatic_user"));

const usePresistUser = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setUser = (user) => {
        dispatch({ type: "SET_USER", payload: user });
    };

    const removeUser = () => {
        dispatch({ type: "REMOVE_USER" });
    };

    const output = { data: state, actions: { setUser, removeUser } };
    return output;
};
export default usePresistUser;
