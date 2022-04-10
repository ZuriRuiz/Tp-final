import useFetchPeliculas from "../Hooks/useFetchPeliculas";
import usePaginado from "../Hooks/usePaginado"
import CardPopularesUltimosL from "./CardPopularesUltimosL";
import Box from "@mui/material/Box";
import Paginado from "./Paginado";


const Populares = ({ titulo, imagen, linkCard }) => {
  const { page, handleClickNext, handleClickPrev } = usePaginado()
  const { peliculas, totalPages } = useFetchPeliculas("popular", page);

  
  return (
    <Box
      sx={{
        marginTop: 5,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {peliculas.map((pelicula) => (
          <CardPopularesUltimosL
            key={pelicula.id}
            titulo={pelicula.title}
            imagen={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}
            linkCard={`/detalle-pelicula/${pelicula.id}`}
          />
        ))}
      </Box>
            
      <Paginado
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
        page={page}
        totalPages={totalPages}
      />
    </Box>
  );
};

export default Populares;
