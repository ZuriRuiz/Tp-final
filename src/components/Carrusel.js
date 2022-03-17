import React from "react";
import Carousel from "react-material-ui-carousel";
import Container from "@mui/material/Container";
import CarruselItem from "./CarruselItem";
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
    <Container sx={{ bgcolor: "gray", height: '75%', mt: 6, pt: 1 }}>
      <Carousel animation="slide" duration="700">
        {peliculas.map((pelicula) => (
          <CarruselItem
            key={pelicula.id}
            titulo={pelicula.title}
            imagen={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
            descripcion={pelicula.overview}
          />
        ))}
      </Carousel>
    </Container>
  );
};

export default Carrusel;
