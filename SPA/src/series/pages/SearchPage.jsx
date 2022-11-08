export const SearchPage = () => {
  return (
    <>
      <div className="row mt-3">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form >

            <input 
              type="text"
              placeholder="Search a character"
              className="form-control"
              name="searchText"
              autoComplete="off"
            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>

          </form>

        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary animate__animated animate__fadeIn">
            Search a hero
          </div>
          
          <div className="alert alert-danger animate__animated animate__fadeIn">
            There's no result whit <b> ABC </b>
          </div>

        </div>

      </div>
    </>  
  )
}
