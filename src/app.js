import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Helo from server")
})

export default app;