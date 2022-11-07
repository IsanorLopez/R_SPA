import { useFetchPersonajes } from "../hook/useFetchPersonajes"

export const BreakingBadPage = () => {

    const { personajes, isLoading } = useFetchPersonajes('Breaking+Bad');

    return (
        <>
            <h1>BreakingBadPage</h1>

            {
                isLoading && <h2>Cargando...</h2>
            }

            <div>
                {
                    personajes.map(( personaje ) => (
                        console.log(personaje)
                    ))
                }
            </div>
        </>
    )
}
