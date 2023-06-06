//////////////////////////////////// Reto 1 


// console.log("Mensaje 1")

// setTimeout(function(){
//     console.log("Mensaje 2")
//         setTimeout(function(){
//             console.log("Mensaje 3")
//         });
// },2000)

//////////////////////////////////// Reto 2



let fs = require('fs');

let persona = {
    nombre: "",
    apellido: "",
    edad: 0
};

// let personaJSON = JSON.stringify(persona);

// fs.writeFile('persona.JSON', personaJSON, () =>{
//     fs.readFile('persona.JSON', "utf-8",(error, data)=>{
//         let personaLeida = JSON.parse(data)
//         console.log(personaLeida)
//     })
// })




/////////////////////// Reto 3


var readLineNoSinc = require("readline");
let rl = readLineNoSinc.createInterface(process.stdin, process.stdout)




rl.question('como se llama? ', (nombre) => {
    persona.nombre = nombre
    rl.question('como se apellida? ', (apellido) => {
        persona.apellido = apellido
        rl.question('cuantos años tiene? ', (edad) => {
            persona.edad = edad

            let perStr = JSON.stringify(persona);
            fs.writeFile('persona.JSON', perStr, () => {
                fs.readFile('persona.JSON', "utf-8", (error, data) => {
                    personaLeida = JSON.parse(data)
                    console.log(personaLeida)
                })
            })
            rl.close();

        });
    });
})

///////////////////// Reto 4


