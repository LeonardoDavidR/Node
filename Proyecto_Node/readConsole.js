let read = require('readline')
let fs = require('fs/promises');

function readConsole(callback) {
    let person = {
        nombre: "",
        apellido: "",
        edad: 0
    }
    let rl = read.createInterface(process.stdin, process.stdout)
    rl.question('como se llama? ', (nombre) => {
        person.nombre = nombre
        rl.question('como se apellida? ', (apellido) => {
            person.apellido = apellido
            rl.question('cuantos años tiene? ', (edad) => {
                person.edad = edad


                // console.log(person)

                rl.close();
                callback(person)
            });
        });
    })
}
// readConsole(console.log())




let objeto = {
    nombre: "",
    apellido: "",
    edad: 0
}

function pregunta(pregunta) {
    const question = new Promise((resolve, reject) => {
        const rl = read.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        })
    });
    return question;
}

function preguntaThen(callback) {

    pregunta("como se llama?")
        .then(nombre => {
            objeto.nombre = nombre;

            pregunta("como se apellida?")
                .then(apellido => {
                    objeto.apellido = apellido;

                    pregunta("cuantos años tiene? ")
                        .then(edad => {
                            objeto.edad = edad

                            console.log(objeto)
                            return callback(objeto)
                        })
                })

        })

        .catch(error => {
            console.log(error)
        })

};


function preguntaThen2() {

    pregunta("como se llama?")
        .then(nombre => {
            objeto.nombre = nombre;

            pregunta("como se apellida?")
                .then(apellido => {
                    objeto.apellido = apellido;

                    pregunta("cuantos años tiene? ")
                        .then(edad => {
                            objeto.edad = edad

                            console.log(objeto)
                            return objeto
                        }).then(() => {
                            fs.writeFile("./prueba.JSON", JSON.stringify(objeto))
                                .then(() => {
                                    return fs.readFile("./prueba.JSON", 'utf-8')
                                })
                                .then(data => {
                                    JSON.parse(data)
                                })
                                // .catch(error => {
                                //     console.log(error)
                                // })

                        })
                })

        })


        .catch(error => {
            console.log(error)
        })

};

async function preguntaAsync(callback) {
    try {
        let nombre = await pregunta("como se llama ?")
        let apellido = await pregunta("como se apellida ? ")
        let edad = await pregunta("cuantos años tiene ? ")

        objeto.nombre = nombre;
        objeto.apellido = apellido;
        objeto.edad = edad;
        console.log(objeto);
        return callback(objeto)
    }
    catch (error) {
        console.log(error)
    }
};
async function preguntaAsync2() {
    try {
        let nombre = await pregunta("como se llama ?")
        let apellido = await pregunta("como se apellida ? ")
        let edad = await pregunta("cuantos años tiene ? ")

        objeto.nombre = nombre;
        objeto.apellido = apellido;
        objeto.edad = edad;
        console.log(objeto);
        await fs.writeFile("prueba2.JSON", JSON.stringify(objeto))

        const nuevo = await fs.readFile("prueba2.JSON", 'utf-8')
        JSON.parse(nuevo);

    }
    catch (error) {
        console.log(error)
    }
};

// preguntaAsync2()
preguntaThen2()
// preguntaAsync()
// preguntaThen()

module.exports = { preguntaThen, preguntaAsync }