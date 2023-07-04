import People from "./People"

export default function List({people})
{
    return(
        <>
            {people.map((person) => {
                return <People key={person.id} {...person}/>
            })}
        </>
    )
}