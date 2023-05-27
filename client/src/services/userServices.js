export const registerUser = (user, navigate) => {
    fetch("http://localhost:8080/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
            .then((res) => {
                if (res.status === 200) navigate("/login");
                return res.json();
            })
            .then((data) => alert(data.message))
            .catch((error) => alert(error)),
    });
};

export const loginUser = (user, navigate) => {
    fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((res) => res.json())
        .then((data) => {
            alert(data.message);
            localStorage.setItem("libromatic_access_token", data.token);
            localStorage.setItem("libromatic_user", JSON.stringify(data.user));
            navigate("/");
        })
        .catch((error) => alert(error));
};

export const findUserByUsername = async (username) => {
    const request = await fetch(
        "http://localhost:8080/users/findByUsername?username=" + username,
        {
            method: "GET",
        }
    );
    const response = await request.json();
    const user = response.user;
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
