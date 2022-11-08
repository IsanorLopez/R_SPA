import { Link } from 'react-router-dom';

export const PersonajeCard = ({
    id,
    img,
    name,
    nickname,
    occupation,
    status,
    isAlive
}) => {

  return (
    <div className="col">
        <div className="card">
            <img src={ img } className="card-img-top card img" alt="..."/>

            <div className="card-body">
                <h5 className="card-title">{ name }</h5>
                <p className="card-text">{ nickname }</p>
                <Link to={`/Personaje/${ id }`} className="btn btn-primary fullWidth">Detalles</Link>
            </div>

            <div className= "card-footer">
                <small className="text-muted">{ status }</small>
            </div>
        </div>
    </div>
  )
}
