import { useEffect, useState } from "react"



const ListaPeliculas = ({titulo, url}) => {

    const [peliculas, setPeliculas] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${url}?api_key=27fe8ac63cb50ba4de232dbace0cf5c6&language=es-AR&page=1`)
        .then(res => res.json())
        .then(data => setPeliculas(data.results))
    }, [])

    return(
        <div>
            <h2>{titulo}</h2>
            {peliculas.map(pelicula => <p key={pelicula.id}>{pelicula.title}</p>)}
        </div>
    )
}

export default ListaPeliculas;