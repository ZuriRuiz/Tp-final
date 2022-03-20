import React from "react";
import CarruselItem from "./CarruselItem";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "@mui/material/Container";

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
    <Container sx={{ mt: 15, textContent: "center", border: 1, p: "auto"}}>
      <Slider
        dots={true}
        arrows={true}
        slidesToShow={1}
        autoplay={true}
        autoplaySpeed={2500}
        adaptiveHeight={true}
      >
        {peliculas.map((pelicula) => (
          <CarruselItem
            key={pelicula.id}
            titulo={pelicula.title}
            imagen={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
            descripcion={pelicula.overview}
          />
        ))}
      </Slider>
    </Container>
  );
};

export default Carrusel;
