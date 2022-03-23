import useFetchPeliculas from "../Hooks/useFetchPeliculas";
import CardPopularesUltimosL from "./CardPopularesUltimosL";

const UltimosL = ({titulo, imagen, link}) => {
    
    const peliculas = useFetchPeliculas("upcoming")
    
    return (
        <div>
        {peliculas.map(pelicula => (
            <CardPopularesUltimosL
            titulo={pelicula.title}
            imagen={`https://image.tmdb.org/t/p/w300${pelicula.poster_path}`}
            link={`/${pelicula.id}`}
            />

        ))}
        </div>
    )   
}

export default UltimosL;