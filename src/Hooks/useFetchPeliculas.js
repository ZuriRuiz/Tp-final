import { useState, useEffect } from "react"



const useFetchPeliculas = (categoria, page) => {
    
    const [peliculas, setPeliculas] = useState([])
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${categoria}?api_key=27fe8ac63cb50ba4de232dbace0cf5c6&language=es-AR&page=${page}`)
        .then(res => res.json())
        .then(data => {
            setPeliculas(data.results);
            setTotalPages(data.total_pages)
            
          });
        
    }, [page, categoria])

    return {
        peliculas: peliculas,
        totalPages: totalPages
    }
}

export default useFetchPeliculas;