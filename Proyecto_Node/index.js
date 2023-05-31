let escribir = require("./writeAndReadObject");
let consola = require("./readConsole");



// consola.readConsole(function callback(objeto){
//         escribir.writeAndRead("./Calle.JSON", objeto)
// });

// consola.readConsole((objeto)=>{
//         escribir.writeAndRead("./Calle.JSON", objeto)
// })
// consola.preguntaThen(function callback(objeto){
//         escribir.writeAndReadPro("objeto.JSON", objeto)
// })
consola.preguntaAsync(function callback(objeto){
        escribir.writeAndReadAsync("objeto2.JSON", objeto)
})