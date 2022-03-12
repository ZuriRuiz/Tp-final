import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";

const PeliculaItem = ({ titulo, imagen, Link }) => {
    return (
        <Box sx={{ display: "flex",  justifyContent: "space-between", mt: 1, border: 1, p: 3, borderColor: 'grey.500' }}>
            
            <Avatar src={imagen} />
            
            <Typography sx={{ pl: 1, pt: 1, }}>{titulo}</Typography>
            
            <ArrowForwardIosIcon sx={{ width: 30, pt: 1, bgcolor: "#007efd", color: "white", borderRadius: "50%" }} />
            
        </Box>
    )
}

export default PeliculaItem;