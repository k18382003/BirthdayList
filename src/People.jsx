export default function People({image, name, age})
{
    return(
        <div className="person">
            <img src={image} alt={name} className="img" />
            <div>
                <h4>{name}</h4>
                <p>{age} years old</p>
            </div>
        </div>
    )
}