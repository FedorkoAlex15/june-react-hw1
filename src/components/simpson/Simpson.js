
import '../simpson/style.css'
export default function Simpson({name, surname, age}){



    return(
        <div className={'character'}>
            <h2>{name}</h2>
            <h2>{surname}</h2>
            <p>{age}</p>
        </div>
    )
}