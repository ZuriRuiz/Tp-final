import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';


const CarruselItem = ({ titulo, imagen, descripcion, linkCarrusel }) => {
  return (
    <Box
    sx={{
      backgroundImage: `url(${imagen})`,
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "500px",
      backgroundSize: "cover",
      backgroundPosition: "50% 30%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "800px",
        bgcolor: "#252123",
        color: "white",
        fontWeight: 'regular',
        borderRadius: 2 ,
        mt: 8,
        
      }}
    >
      <Typography sx ={{mt: 1}} variant="h5">
        {titulo}
      </Typography>
      <Typography sx ={{p: 2, textContent: "center"}}variant="body2">
        {descripcion}
      </Typography>
      <MenuItem componente={Link} to={linkCarrusel}>
      <Button sx={{bgcolor: "black", mb: 2, outlined: "none" }} variant="contained">Ver mas... </Button>
      </MenuItem>
    </Box>
  </Box>
  );
};

export default CarruselItem;
