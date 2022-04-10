import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';




const CardPopularesUltimosL = ({ titulo, imagen, linkCard }) => {
  return (
    
    
    <Card
      sx={{
        width: 270,
        height: 480,
        m: 2,
        display: "flex",
        flexDirection: "column",
        
      }}
    >
      <CardMedia
        component="img"
        height="350"
        image={imagen}
        alt={`Img-${titulo}`}
      />

      <CardContent>
        <Typography gutterBottom variant="h6" sx={{fontWeight: "bold", fontSize: 'default'}}>
          {titulo}
        </Typography>
      </CardContent>


      <CardActions>
        <Link to={linkCard}>
          
            <IconButton>
            <RemoveRedEyeIcon  />
            </IconButton>
          
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardPopularesUltimosL;
