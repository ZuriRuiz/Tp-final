import useFetchPeliculas from "../Hooks/useFetchPeliculas";
import CardPopularesUltimosL from "./CardPopularesUltimosL";
import { useState } from "react";
import usePaginado from "../Hooks/usePaginado";
import Paginado from "./Paginado";

const UltimosL = ({ titulo, imagen, link }) => {
  const { peliculas, totalPages } = useFetchPeliculas("upcoming", page);
  const { page,  handleClickNext, handleClickPrev } = usePaginado();

  console.log(totalPages);
  return (
    <div>
      {peliculas.map((pelicula) => (
        <CardPopularesUltimosL
          titulo={pelicula.title}
          imagen={`https://image.tmdb.org/t/p/w300${pelicula.poster_path}`}
          link={`/${pelicula.id}`}
        />
      ))}

      <Paginado
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
        page={page}
        totalPages={totalPages}
      />
    </div>
  );
};

export default UltimosL;
