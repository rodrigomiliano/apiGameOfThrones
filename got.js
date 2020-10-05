//const library = require('./library')

const obtenerPersonaje = require("./library");


obtenerPersonaje("Walder").then(character => {
    console.log("Nombre del personaje: " + character.name );
                 
    }).catch((error) =>{
        console.log(error);
    });
