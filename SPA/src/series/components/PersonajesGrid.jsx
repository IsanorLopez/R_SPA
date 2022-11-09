import PropTypes from 'prop-types';

import { useFetchPersonajes } from "../hook/";

import { PersonajeCard } from "./PersonajeCard";

export const PersonajesGrid = ({ categoria }) => {

    const { personajes, isLoading } = useFetchPersonajes(categoria);

    return (
        <>
            {
                isLoading && <h2>Cargando...</h2>
            }

            <div className="row row-cols-1 row-cols-md-4">

                {
                    personajes.map(( p ) => (
                        <PersonajeCard key = { p.id } { ...p } />
                    ))
                }

            </div>
        </>
    )
}

PersonajesGrid.propTypes = { 
    categoria: PropTypes.string.isRequired
}
