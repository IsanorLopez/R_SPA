
export const PersonajeCard = ({
    id,
    img,
    name,
    nickname,
    occupation,
    status
}) => {

  return (
    <>
        <h1>{name}</h1>
        {
            console.log(id,img,name,nickname,occupation,status)
        }
    </>
  )
}
