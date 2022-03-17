import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const CarruselItem = ({ titulo, imagen, descripcion }) => {
  return (
    <Container>
      <Box>
        <Typography variant="h5" sx={{}}>
          {titulo}
        </Typography>
        <Typography>{descripcion}</Typography>

        <Container sx={{ display: "flex", alignContent: "center" }}>
          <img src={imagen} />
        </Container>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "10%" }}>
        <Button variant="contained" size="small">
          Ver mas...
        </Button>
      </Box>
    </Container>
  );
};

export default CarruselItem;
