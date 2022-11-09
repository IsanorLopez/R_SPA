import { Link } from 'react-router-dom';

export const PersonajeCard = ({
    id,
    img,
    name,
    nickname,
    status
}) => {

  return (
    <div className="col">
        <div className="card mt-3 mb-3 shadow mb-5 bg-white rounded">
            <img src={ img } className="card-img-top card img animate__animated animate__fadeIn" alt="..."/>

            <div className="card-body">
                <h5 className="card-title">{ name }</h5>
                <p className="card-text">{ nickname }</p>
                <Link to={`/Personaje/${ id }`} className="btn btn-primary w-100">About</Link>
            </div>

            <div className= "card-footer">
                <small className="text-muted">{ status }</small>
            </div>
        </div>
    </div>
  )
}
