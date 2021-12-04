const chalk = require("chalk");

class Device {

    constructor(name, model, noLeds, location){
        this.name = name;
        this.model = model;
        this.noLeds = noLeds;
        this.location = location; 
    };
   turnOnLed(){
        console.log(chalk.blue(`The led was turned ON...`));
   }
};

class DeviceWithCamera extends Device{

    constructor(name, model, noLeds, location, cameraModel){
        super(name, model, noLeds, location);
        this.cameraModel = cameraModel; 
    };
   takeAPicture(){
    console.log(chalk.red(`Taking a picture...`));
    }
    get getInfo(){
        return `name: ${this.name}, mode ${this.model}`;
    }
};

const FirstDevice = new Device("MyFirstDevice","RaspberryPi3", 2, 1000);
FirstDevice.turnOnLed();

const SecondDevice = new DeviceWithCamera("MyFirstDevice","RaspberryPi4", 2, 1000);
SecondDevice.turnOnLed();
SecondDevice.takeAPicture();
console.log (SecondDevice.getInfo);