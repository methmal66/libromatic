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
        .then((data) => data.token);
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

//TODO - Return only boolean value
export const findUserByUsername = async (username) => {
    const request = await fetch(
        "http://localhost:8080/users/findByUsername?username=" + username,
        {
            method: "GET",
        }
    );
    const response = await request.json();
    const user = response.user;
    console.log(user);
    return user;
};

export const findUserByEmail = async (email) => {
    const request = await fetch(
        "http://localhost:8080/users/findByEmail?email=" + email,
        {
            method: "GET",
        }
    );
    const response = await request.json();
    const user = response.user;
    return user;
};
