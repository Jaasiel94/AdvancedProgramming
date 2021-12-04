const express = require("express");

const PORT = 8888;
const app = express();

app.get("/", (request, response) =>{
        response.json("Hello world");
})

app.listen( PORT, () =>{
        console.log((`http://localhost:${PORT}/`));
})