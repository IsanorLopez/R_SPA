import { Navigate, useNavigate, useParams } from 'react-router-dom'

import { useFetchPersonaje } from '../hook';

export const PersonajePage = () => {
  
  const { Id } = useParams();

  const navigate = useNavigate();

  const { personaje, isLoading } = useFetchPersonaje(Id);

  const onNavigateBack = () => {
    navigate(-1);
  }

  if (!personaje) {
    return <Navigate to="/BreakingBad" />
  }

  return (
    <>
      
      {
        isLoading && <h2>Cargando...</h2>
      }

      <div className="row mt-5">
        <div className="col-4 card">
          <img 
            src={ personaje.img }
            alt={ personaje.name }
            className="img"
          />
        </div>

        <div className="col-8">
          <h3>{ personaje.name }</h3>
          
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>NickName:</b> { personaje.nickname } </li>
            <li className="list-group-item"> <b>Bithday:</b> { personaje.birthday } </li>
            <li className="list-group-item"> <b>Status:</b> { personaje.status } </li>
          </ul>

          <h5 className="mt-3"> portrayed </h5>
          <p>{ personaje.portrayed }</p>

          <button 
            className="btn btn-outline-primary"
            onClick={ onNavigateBack }
          >
            Regresar
          </button>

        </div>

      </div>
    </>
  )
}
