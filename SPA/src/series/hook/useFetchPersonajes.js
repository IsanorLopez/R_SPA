import { useEffect, useState } from 'react';

import { getPersonajesSerie } from '../services/SeriesService';

export const useFetchPersonajes = (category) => {

    const [personajes, setPersonajes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getPersonajes = async () => {
      const personajes = await getPersonajesSerie(category);
      setPersonajes( personajes );
      setIsLoading(false);
    }

    useEffect( () => {
       getPersonajes();
    }, []);

    return {
        personajes,
        isLoading
    }
}
