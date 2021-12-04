function addTwoNumbers(parametr1, parametr2) { 
    return parametr1 + parametr2;
};

const addAllNumbers = function (){
    const numbers = [...arguments];
    const add = numbers.reduce( function (acc, currentValue, currentIndex, array) {
        return acc = acc + currentValue;
    }, acc = {add: 0});
    return add;
};
console.log(addAllNumbers(1,2,3));


function getName(firstname, lastname){
    return `${firstname} ${lastname}`;
}

function sayHello( callback, first, last){
    console.log(`HELLO ${callback(first, last)}`);
}

sayHello( getName, "Adrian", "Felipe");

const arrowFunction = (parametro1) => {

    return parametro1*2

   }
console.log(arrowFunction(2));

const arrowFunction2 = arg1 => arg1*2;
console.log(arrowFunction2(2));