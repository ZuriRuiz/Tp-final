import useFetchPeliculas from "../Hooks/useFetchPeliculas";
import CardPopularesUltimosL from "./CardPopularesUltimosL";
import Box from "@mui/material/Box";

const Populares = ({ titulo, imagen, link }) => {
  const peliculas = useFetchPeliculas("popular");
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
            tituloTarjeta={pelicula.title}
            imagenTarjeta={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}
            linkTarjeta={`/detalle-pelicula/${pelicula.id}`}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Populares;
