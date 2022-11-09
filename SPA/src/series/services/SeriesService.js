import axios from "axios";

export const getPersonajesSerie = async ( category ) => {

    let personajes = [];

    await axios.get(
        `https://www.breakingbadapi.com/api/characters?category=${ category }`
    ).then((response) => {

        personajes = response.data.map( p => ({
            id: p.char_id,
            name: p.name,
            occupation: p.occupation[0],
            nickname : p.nickname,
            status : p.status,
            img : p.img
        }));

    }).catch((error) => {
        console.log(error);
    });

    return personajes;
}

export const getPersonajeSerie = async( id ) => {

    let personaje = {};

    await axios.get(
        `https://www.breakingbadapi.com/api/characters/${ id }`
    ).then((response) => {

        personaje = response.data[0];

    }).catch((error) => {
        console.log(error);
    });

    return personaje;
}

export const getResultadosPersonajes = async( nombre ) => {

    let personajes = [];

    await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${ nombre }`
    ).then((response) => {

        personajes = response.data.map( p => ({
            id: p.char_id,
            name: p.name,
            occupation: p.occupation[0],
            nickname : p.nickname,
            status : p.status,
            img : p.img
        }));

    }).catch((error) => {
        console.log(error);
    });

    return personajes;
}
