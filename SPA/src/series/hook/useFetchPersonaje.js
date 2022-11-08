import { useEffect, useState } from 'react';

import { getPersonajeSerie } from '../services/SeriesService';

export const useFetchPersonaje = (id) => {

    const [personaje, setPersonaje] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getPersonaje = async () => {
      const personaje = await getPersonajeSerie(id);
      setPersonaje( personaje );
      setIsLoading( false );
    }

    useEffect( () => {
      getPersonaje();
    }, []);

    return {
        personaje,
        isLoading
    }
}
