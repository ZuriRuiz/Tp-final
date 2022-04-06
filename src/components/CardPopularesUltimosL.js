import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Button from "@mui/material/Button"


const CardPopularesUltimosL = ({ titulo, imagen, linkCard }) => {
  return (
    
    
    <Card
      sx={{
        width: 250,
        height: 450,
        m: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={imagen}
        alt={`Img-${titulo}`}
      />

      <CardContent>
        <Typography gutterBottom variant="h6">
          {titulo}
        </Typography>
      </CardContent>


      <CardActions>
        <Link to={linkCard}>
          <IconButton>
            <RemoveRedEyeIcon />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardPopularesUltimosL;
