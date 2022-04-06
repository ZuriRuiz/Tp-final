import { useEffect, useState } from "react"
import PeliculaItem from "./PeliculaItem";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';



const ListaPeliculas = ({titulo, url}) => {

    const [peliculas, setPeliculas] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${url}?api_key=27fe8ac63cb50ba4de232dbace0cf5c6&language=es-AR&page=1`)
        .then(res => res.json())
        .then(data => setPeliculas(data.results))
    }, [])

    return(
        <div style= {{height: "450px", overflowY: "scroll" }}>
            <Box sx={{ height: 40, bgcolor: "#111214", color: "#ffffff", textAlign: 'center' }}>
                <Typography sx={{ pt: 1 }}>{titulo}</Typography>
            </Box>
            
            
                {peliculas.map(pelicula => (
                <PeliculaItem
                key={pelicula.id}
                titulo={pelicula.title}
                imagen={`https://image.tmdb.org/t/p/w300${pelicula.poster_path}`}
                linkItem={`/detalle-pelicula/${pelicula.id}`}
                />

            ))}
            
           
            
            
        </div>
    )
}

export default ListaPeliculas;