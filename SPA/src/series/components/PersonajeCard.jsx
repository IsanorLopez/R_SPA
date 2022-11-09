import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

PersonajeCard.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    nickname: PropTypes.string.isRequired, 
    status: PropTypes.string.isRequired
}

