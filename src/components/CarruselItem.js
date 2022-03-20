import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const CarruselItem = ({ titulo, imagen, descripcion }) => {
  return (
    
      <div>
        <Typography>{titulo}</Typography>
        <Typography>{descripcion}</Typography>

        <img src={imagen} />
      
      
        <Button variant="contained" size="small">
          Ver mas...
        </Button>
      </div>
    
  );
};

export default CarruselItem;
