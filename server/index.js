const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRoutes = require("./src/routes/userRoutes");

mongoose
    .connect(
        "mongodb+srv://methmal:methmal@mycluter.6tv2npe.mongodb.net/libromatic?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use("/users", userRoutes);

const port = 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
