import { useState, useEffect } from "react"
import queryString from 'query-string'
import { useLocation, useNavigate } from "react-router-dom";

import { PersonajesResults } from "../components";
import { getResultadosPersonajes } from "../services/SeriesService";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [inputValue, setInputValue] = useState('');
  const [characters, setCharacters] = useState([]);

  const [showError, setShowError]     = useState(false);
  const [showSearch, setShowSearch]   = useState(true);
  
  let { q = '' } = queryString.parse( location.search );

  useEffect(() => {
    if (q !== '') {
      consultar(q);
    }
  }, [])

  const onInputChange = (event) => {

    //Cuando se modifica el nombre limpio y muestro mensajes
    setShowSearch(true);
    setShowError(false);
    setCharacters([]);

    setInputValue(event.target.value)
  }

  const consultar = async (nombre) => {

    setShowSearch(false); //Se oculta el mensaje en espera de resultados
    setInputValue(nombre);
    const personajes = await getResultadosPersonajes(nombre);
    
    if (personajes.length === 0) {
      setShowError(true); //Se muestra el mensaje cuando no se obtuvieron resultados
    }

    setCharacters(personajes);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length < 1) return;

    consultar(inputValue);

    navigate(`?q=${ inputValue }`);
  }

  return (
    <>
      <div className="row mt-3">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={ onSubmit }>

            <input 
              type="text"
              placeholder="Search a character"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value = { inputValue }
              onChange = { onInputChange }
            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>

          </form>

        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none' }}>
            Search a character
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none' }}>
            There's no results whit <b>{ inputValue }</b>
          </div>

          {
            < PersonajesResults personajes={ characters } />
          }

        </div>

      </div>
    </>  
  )
}
