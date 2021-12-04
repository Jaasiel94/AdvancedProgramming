const fs = require("fs");
const chalk = require("chalk");

var initialSMS = chalk.blue("App running...");

console.log(initialSMS);

const device = {

    sensorModel: "HC04",
    count: 0,
    date: new Date(),
};

fs.writeFileSync("./db/log.json", "");
console.log( chalk.green("dataInformation was created succesfully!!"));

try{
    fs.appendFileSync("./db/log.json", JSON.stringify(device));
    console.log(chalk.green("JSON created"));
} catch(error){
    console.log(chalk.red( chalk.red(`Error: ${error}`)));
}