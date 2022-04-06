import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";

const PeliculaItem = ({ titulo, imagen, linkItem }) => {
    return (
        <Box sx={{ display: "flex",  justifyContent: "space-between", mt: 1, border: 1, p: 3, borderColor: 'grey.500'  }}>
            
            
                <Avatar src={imagen} />
            
                <Typography sx={{ pl: 1, pt: 1, color: "#050505", fontWeight: 'bold'}}>{titulo}</Typography>
            
            <MenuItem component={Link} to={linkItem}>
                <ArrowForwardIosIcon sx={{ width: 20, pt: 1, ml: 1}} />
            </MenuItem>
        </Box>
    )
}

export default PeliculaItem;