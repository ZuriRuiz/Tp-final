import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardPopularesUltimosL from "./CardPopularesUltimosL";
import Button from "@mui/material/Button"



const Buscar = () => {
  const [valorDelInput, setValorDelInput] = useState("");
  const [peliculas, setPeliculas] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=27fe8ac63cb50ba4de232dbace0cf5c6&languaje=en-EN&query=${searchParams.get(
        "query"
      )}&page=1`
    )
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, [searchParams]);

  console.log(peliculas);

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const handleClick = () => {
    setSearchParams({
      query: valorDelInput,
    });
  };

  return (
    <Box
      sx={{
        m: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Button

     
        margin="normal"
        variant="outline"
        endIcon={<SearchIcon></SearchIcon>}
        onClick={handleClick}
      >
        Buscar
      </Button>

      <TextField
        onChange={handleChange}
        type="text"
        label="Buscar Peliculas"
        id="filled-size-normal"
        variant="filled"
        value={valorDelInput}
      />
      <Box sx={{
        marginTop: 10,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}>

      {peliculas &&
        peliculas.map((pelicula) => {
          return (
            <CardPopularesUltimosL
              titulo={pelicula.title}
              imagen={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
              linkCard={`/detalle-pelicula/${pelicula.id}`}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Buscar;
