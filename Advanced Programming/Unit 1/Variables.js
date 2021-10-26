var myVar;
let myLet = 15;
const myConst = 69420;

console.log(`myVar: ${myVar}, myLet: ${myLet}, myConst: ${myConst}, hoistedvariable: ${hoistedvariable}`);

var hoistedvariable = 25;

// Execution context
if(typeof myVar === "undefined") 
{
        console.log(myVar);
        var myVar = 50;
        console.log(myVar);
};