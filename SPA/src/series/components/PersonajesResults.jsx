import { PersonajeCard } from './'

export const PersonajesResults = ({personajes = []}) => {
    return (
        <div>
          {
            personajes.map(( p ) => (
                <PersonajeCard key = { p.id } { ...p } />
            ))
          }
        </div>
    )
}
