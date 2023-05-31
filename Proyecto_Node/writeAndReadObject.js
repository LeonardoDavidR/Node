let fs = require('fs/promises');

function writeAndRead(x, y ){


            let yStr = JSON.stringify(y);
              fs.writeFile(x, yStr, () => {
                fs.readFile(x, "utf-8", (error, data) => {
                    personaLeida = JSON.parse(data)
                    console.log(personaLeida)
                    return data;
                })
            })
            

        };



function writeAndReadPro(x,y){

        fs.writeFile(x, JSON.stringify(y))
        .then(()=>{
          return fs.readFile(x, 'utf-8')
        })
        .then(data => {
          JSON.parse(data)
        })
        .catch(error=>{
          console.log(error)
        })
        
      }

async function writeAndReadAsync(x,y){
  
  
  try{ 
  await fs.writeFile(x, JSON.stringify(y))

  const nuevo = await fs.readFile(x, 'utf-8')
  JSON.parse(nuevo);
  }

  catch(error){
    console.log(error)
  }
}



//  writeAndRead('./miFichero.json', {calle: "santo Angel", numero: 48})

writeAndReadPro('persona.JSON', {nombre : "juan", apellido : "Gonzales",edad : 18, })
// writeAndReadAsync('persona.JSON', {nombre : "cahlitos", apellidos: "carlos", edad: 30})

 module.exports = {writeAndRead, writeAndReadPro, writeAndReadAsync};














