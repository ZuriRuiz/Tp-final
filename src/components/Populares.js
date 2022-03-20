import useFetchPeliculas from "../Hooks/useFetchPeliculas";

const Populares = () => {
    
    const peliculas = useFetchPeliculas("popular")
    return (
        <div>
        <h2>Peliculas Populares</h2>
        {peliculas.map(pelicula => (
            <h3 key={pelicula.id}>{pelicula.title}</h3>
        ))}
        </div>
    )
}

export default Populares;