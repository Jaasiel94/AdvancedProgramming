const student = {
    name: "Pedro",
    age: 19,
    greetings: function(message){
            console.log(`this is equal: ${JSON.stringify(this)}`);
            console.log(`${message} soy ${this.name} y tengo ${this.age}`);
    },
};

const cpyStudent = Object.assign(student);
cpyStudent.name = "Fernando xd";
console.log(student);
console.log(cpyStudent);