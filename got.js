const obtenerPersonaje = require("./library");
//const obtenerCasa = require("./library");

obtenerPersonaje(583).then(character => {
    console.log("Nombre del personaje: " + character.name );
    console.log("Género: " + character.gender );
    console.log("Cultura: " + character.culture );
    console.log("Nacimiento: " + character.born + "; Muerte: " + character.died );    
    console.log("Titulos: " + character.titles );
    console.log("Alias: " + character.aliases );
    console.log("Padre: " + character.father + "; Madre: " + character.mother + ", Esposo/a: " + character.spouse);        
    console.log("Lealtades: " + character.allegiances );
    console.log("Libros: " + character.books );
    //console.log("povBooks: " + character.povBooks );
    console.log("Temporadas en TV: " + character.tvSeries );
    console.log("Interpretado por: " + character.playedBy );
    console.log("");
    }).catch((error) =>{
        console.log(error);
    });

/*    
obtenerCasa(378).then(house => {
    console.log("Nombre del personaje: " + house.name );             
    }).catch((error) =>{
        console.log(error);
    });
*/