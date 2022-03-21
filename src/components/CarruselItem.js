import { Box, Button, Typography } from "@mui/material";

const CarruselItem = ({ titulo, imagen, descripcion }) => {
  return (
    <Box
    sx={{
      backgroundImage: `url(${imagen})`, // el div tiene como fondo nuestra imagen
      backgroundPosition: 'center', //la imagen esta centrada
      backgroundRepeat: 'no-repeat', // la imagen no se repite
      backgroundSize: 'cover',
      width: "100%", // ocupa todo el div
      mt: 10,
      width: '100%',
      height: '100%'
    
    }}
  >
    <Typography>{titulo}</Typography>
    <Typography sx= {{ display: "flex", flexDirection: "column" }}>{descripcion}</Typography>

    <Button>Ver mas...</Button>
  </Box>
    
  );
};

export default CarruselItem;
