import { useState, useEffect } from "react"



const useFetchPeliculas = (categoria) => {
    
    const [peliculas, setPeliculas] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${categoria}?api_key=27fe8ac63cb50ba4de232dbace0cf5c6&language=es-AR&page=1`)
        .then(res => res.json())
        .then(data => setPeliculas(data.results))
    }, [])

    return peliculas
}

export default useFetchPeliculas;