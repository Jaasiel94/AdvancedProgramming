const BMO = {
    name: "BMO",
    type: "Video Game console",
    friends: ["Finn", "Jake", "Burbujita"],
    dance: function () {
            console.log("BMO is dancing...");
            return;
    },
};

for ( key in BMO ){
    console.log(`${ key }: ${BMO[key]}`)
}