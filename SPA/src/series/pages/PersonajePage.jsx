import { useParams } from 'react-router-dom'

import { useFetchPersonaje } from '../hook';

export const PersonajePage = () => {
  const { Id } = useParams();

  const { personaje, isLoading } = useFetchPersonaje(Id);

  return (
    <>
      {
        isLoading && <h2>Cargando...</h2>
      }

      <h1>{ personaje.name }</h1>
    </>
  )
}
