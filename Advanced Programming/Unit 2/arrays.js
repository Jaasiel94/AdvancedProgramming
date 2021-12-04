var myArray = [1, 2, 3, 4, 5];

const ln = myArray.length;
console.log(ln);

console.log(myArray);

for(let i = 0; i<ln; i++)
{
    console.log(myArray[i]);
}

console.log("----------");

for(let index in myArray)
{
    console.log(myArray[index]);
}

console.log("----------");

for(let i of myArray)
{
    console.log(i);
}

let data = [];
const temp = 27;
data.push(temp);
data.push(12);
data.push(60);
console.log(data);

data.unshift(12);
console.log(data);

data.splice(2,0, 3,4);
console.log(data);

data.pop();
data.shift();
data.splice(1,3,500);
console.log(data);

var friends = ["Luis", "Dios", "Alexis"];

var bestFriends = friends.slice(1);
bestFriends.shift();

console.log(friends);
console.log(bestFriends);

var edades = [20, 22, 23, 24];
edades = edades.map( function (currentValue, index)
{
    return currentValue - 2;
})
console.log(edades);