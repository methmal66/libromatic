export const registerUser = (user, navigate) => {
    fetch("http://localhost:8080/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((res) => res.json())
        .then((data) => {
            alert(data.message);
            navigate("/login");
        })
        .catch((error) => alert(error));
};

export const loginUser = (user) => {
    return fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((res) => res.json())
        .then((data) => data.token)
        .then((token) => localStorage.setItem("libromatic_token", token));
};

export const getMe = () => {
    const token = localStorage.getItem("libromatic_token");
    return fetch("http://localhost:8080/users/me", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    })
        .then((res) => res.json())
        .then((data) => data.user);
};

export const isUsernameExist = async (username) => {
    const response = await fetch(
        "http://localhost:8080/users/isUsernameExist?username=" + username,
        {
            method: "GET",
        }
    );
    const data = await response.json();
    const status = data.status;
    console.log("Username exists? " + status);
    return status;
};

export const isEmailExist = async (email) => {
    const response = await fetch(
        "http://localhost:8080/users/isEmailExist?email=" + email,
        {
            method: "GET",
        }
    );
    const data = await response.json();
    const status = data.status;
    console.log("Email exists? " + status);
    return status;
};
