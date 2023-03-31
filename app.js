const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    res.json({
        success: 2,
        message: "This is rest apis working"
    })
});

app.listen(4000, () => {
    console.log("Server up and running");
});