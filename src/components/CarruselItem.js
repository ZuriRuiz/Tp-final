import { Paper, Button } from "@mui/material";

const CarruselItem = ({ titulo, imagen, descripcion }) => {
    return (

        <Paper

        >
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <img src={imagen}/>
            <Button>Ver mas...</Button>
        </Paper>
    )
}

export default CarruselItem;