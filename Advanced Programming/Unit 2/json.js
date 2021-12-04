const device = {

    sensorModel: "HC04",
    count: 0,
    date: new Date(),
};

console.log(device.date.getFullYear(), typeof device);

const deviceJSON = JSON.stringify(device);
console.log(deviceJSON, typeof deviceJSON);

const myJson = '("name": "Will see", "Edad": 25, "friends": ["El loco", "Alto"], "isMannager": false)';
console.log = (myJson, typeof myJson);

const myObj = JSON.parse(myJson)
console.log(myObj.name);