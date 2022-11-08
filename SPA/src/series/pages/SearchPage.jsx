import { useState } from "react"

import { PersonajesResults } from "../components";
import { getResultadosPersonajes } from "../services/SeriesService";

export const SearchPage = () => {

  const [inputValue, setInputValue] = useState('');
  const [characters, setCharacters] = useState([]);

  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    if (inputValue.trim().length < 1) return;

    const personajes = await getResultadosPersonajes(inputValue);

    setCharacters(personajes);
  }

  const showSearch = (characters.length === 0) && (inputValue.length === 0);
  const showError =  (characters.length === 0) && (inputValue.length > 0);

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
            There's no result whit <b> { inputValue } </b>
          </div>

          {
            < PersonajesResults personajes={ characters } />
          }

        </div>

      </div>
    </>  
  )
}
