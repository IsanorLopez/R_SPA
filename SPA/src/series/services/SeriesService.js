
export const getPersonajesSerie = async( category ) => {
    const Url = `https://www.breakingbadapi.com/api/characters?category=${ category }`;

    const resp = await fetch(Url);

    const data = await resp.json();

    const personajes = data.map( p => ({
        id: p.char_id,
        name: p.name,
        occupation: p.occupation[0],
        nickname : p.nickname,
        status : p.status,
        isAlive : (p.status === 'Alive') ? true : false,
        img : p.img
    }));

    return personajes;
}

export const getPersonajeSerie = async( id ) => {
    const Url = `https://www.breakingbadapi.com/api/characters/${ id }`;

    const resp = await fetch( Url );

    const data = await resp.json();

    const personaje = data[0];

    return personaje;
}
