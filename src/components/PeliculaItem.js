import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";

const PeliculaItem = ({ titulo, imagen, Link }) => {
    return (
        <Box sx= {{ m: 2 }}>
            
            <Avatar src={imagen} />
            
            <Typography>{titulo}</Typography>
            
            <ArrowForwardIosIcon />
            
        </Box>
    )
}

export default PeliculaItem;