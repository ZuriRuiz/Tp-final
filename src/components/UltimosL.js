import useFetchPeliculas from "../Hooks/useFetchPeliculas";
const UltimosL = () => {
    
    const peliculas = useFetchPeliculas("upcoming")
    
    return (
        <div>
        <h2>Ultimos Lanzamientos</h2>
        {peliculas.map(pelicula => (
            <h3 key={pelicula.id}>{pelicula.title}</h3>
        ))}
        </div>
    )   
}

export default UltimosL;