import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const DetalleP = () => {
  const params = useParams();
  const [peliculaD, setPeliculaD] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.idPelicula}?api_key=27fe8ac63cb50ba4de232dbace0cf5c6&language=es-ES`
    )
      .then((res) => res.json())
      .then((data) => {
        setPeliculaD(data);
      });
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${peliculaD.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "120vh",
        display: "flex",
      }}
    >
      <Card
        key={peliculaD.id}
        sx={{
          bgcolor: "transparent",
          boxShadow: "none",
          display: "flex",
          alignItems: "center",
          px: {
            md: 12,
            lg: 16,
          },
          mt: {
            xs: 3,
            sm: 6,
            md: 0,
          },
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box>
            <CardMedia
              component="img"
              sx={{
                width: "300px",
                height: "450px",
                m: 4,
                border: 4,
                borderColor: "white",
                borderRadius: 1,
              }}
              image={`https://image.tmdb.org/t/p/original/${peliculaD.poster_path}`}
            ></CardMedia>
          </Box>
          <CardContent
            sx={{
              ml: 6,
              m: {
                xs: 3,
                sm: 8,
                md: 2,
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Typography
                color="white"
                sx={{
                  lineHeight: "initial",
                  fontSize: "30px",
                  m: 2,
                }}
              >
                {peliculaD.title}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: 500,
                  fontSize: "30px",
                  p: 2,
                  
                }}
              >
                <Typography>({peliculaD.release_date && peliculaD.release_date.slice(0, 4)})</Typography>
              </Typography>

            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default DetalleP;
