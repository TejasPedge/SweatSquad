const express = require("express");
const app = express();
const connection = require("./db");
require("dotenv").config()

// const { auth } = require("./middleware/auth.middleware");
const cors = require("cors");

const { userRouter } = require("./Routes/user.router");

app.use(cors());
app.use(express.json());
app.use("/users", userRouter);

app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Connected To DB");
    } catch (err) {
        console.log("Cannot Connect to the DB");
    }
    console.log(`${process.env.port} is running`);
})

