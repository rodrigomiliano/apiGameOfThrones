//const library = require('./library')

const obtenerPersonaje = require("./library");


obtenerPersonaje("John Snow").then(    (response) =>{
     response.character.forEach(element => {
        console.log(character.name )  })
                 
     }
 
      
    ).catch((error) =>{
        console.log('error');
    });
