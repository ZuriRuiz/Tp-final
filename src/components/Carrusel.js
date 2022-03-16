import React from "react";
import Box from "@mui/material/Box";
import Carousel from "react-material-ui-carousel";
import CarruselItem from "./CarruselItem";
import { Paper, Button } from "@mui/material";
import { useEffect, useState } from "react";

const Carrusel = () => {
  const [peliculas, setPeliculas] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=27fe8ac63cb50ba4de232dbace0cf5c6&language=es-AR&page=1`
    )
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, []);

  return (
    <Carousel animation="slide" duration="800">
      
        <Box sx ={{}}>

            {peliculas.map((pelicula) => (
                <CarruselItem
                    key={pelicula.id}
                    titulo={pelicula.title}
                    imagen={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
                    descripcion={pelicula.overview}
                />
            ))}
        
        </Box>
        
      
    </Carousel>
  );
};

export default Carrusel;
