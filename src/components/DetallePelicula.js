import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const DetallePelicula = () => {
    const [peliculaDetalle, setPeliculaDetalle] = useState([])
    const params = useParams()
    

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${params.idPelicula}api_key=27fe8ac63cb50ba4de232dbace0cf5c6&language=es-AR`)
    .then((res) => res.json())
    .then((data) => {
        setPeliculaDetalle(data);
    })
  }, [])

    return ""
}


export default DetallePelicula;