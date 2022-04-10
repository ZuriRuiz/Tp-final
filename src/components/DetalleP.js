import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from '@mui/material/Button';


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
  }, [params.idPelicula]);

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
                display: {
                  xs: "none",
                  sm: "none",
                  md: "inline",
                },
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
              bgcolor: "#232323",
              borderRadius: 2,
              opacity: .8
              
            }}
          >
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Typography
                color="white"
                sx={{
                  lineHeight: "initial",
                  m: 2,
                  fontSize: {
                    xs: "20px",
                    sm: "34px",
                    md: "34px",
                  },
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
                  p: 2
                  
                }}
              >
                <Typography>({peliculaD.release_date && peliculaD.release_date.slice(0, 4)})</Typography>
              </Typography>

            </Box>
            <Typography
              variant="subtitle1"
              color="white"
              sx={{
                pt: 3,
                textAlign: "justify",
                fontWeigth: 300,
                
              }}
            
            >
              {peliculaD.overview}
            </Typography>
            
            <Typography
              variant= "subtitle1"
              color= "white"
              sx={{
                pt: 3,
                textAlign:"justify",
                fontWeigth: 300
              }}
            >
              Generos

            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap"
              }}
            >
              {peliculaD.genres && peliculaD.genres.map((genre) => (
              <Button
                variant="outlined"
                
                sx={{
                  pt: 3,
                  textAlign: "justify",
                  fontWeigth: 400,
                  color: "black",
                  px: "8px",
                  py: "4px",
                  mr: "10px",
                  mt: "10px",
                  borderColor: "white",
                  bgcolor: "#423E3B",
                  color: "white"
                  
                }}
              >
                {genre.name}

              </Button>
            ))}

            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default DetalleP;
