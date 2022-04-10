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
      <Typography  variant="h5" sx ={{mt: 1,  fontSize: {
        xs: "14px",
        sm:"12px",
        md: "20px",
      },
    }} 
     >
        {titulo}
      </Typography>
      <Typography variant="body2" sx ={{p: 2, textContent: "center", fontSize: {
        xs: "10px",
        sm:"12px",
        md: "14px",
      }
      }}>
        {descripcion}
      </Typography>
      <MenuItem component={Link} to={linkCarrusel}>
      <Button variant="contained" sx={{bgcolor: "black", mb: 2, width: {
        xs:"10px",
        sm:"15px",
        md:"20px",
        
      },
      fontSize: {
        xs: "8px",
        sm:"10px",
        md: "12px",
      },
      
      }}
      >
        Ver más
      </Button>
      </MenuItem>
    </Box>
  </Box>
  );
};

export default CarruselItem;
