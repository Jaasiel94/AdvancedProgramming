const fs = require("fs");
const chalk = require("chalk");

var initialSMS = chalk.blue("App running...");

const User = {

    username: "jaasiel94",
    password: "70254b5b63",
    yearofcreation: new Date().getFullYear,
    email: "2009072@upy.edu.mx",
    typeofUser: "Admin",
    id: 001

};

fs.writeFileSync("./db/myFirstJSON.json", "");
console.log( chalk.green("dataInformation was created succesfully!!"));

try{
    fs.appendFileSync("./db/myFirstJSON.json", JSON.stringify(User));
    console.log(chalk.green("JSON created"));
} catch(error){
    console.log(chalk.red( chalk.red(`Error: ${error}`)));
}

serverResponse = fs.readFileSync("./db/myFirstJSON.json","utf-8");
console.log(serverResponse);