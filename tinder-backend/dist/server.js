import express from "express";
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("====================================");
    console.log("Now listening on PORT " + port);
    console.log("====================================");
});
