import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";



const CardPopularesUltimosL = ({ titulo, imagen, link }) => {
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
        <Typography gutterBottom variant="h5">
          {titulo}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        
      </CardActions>
    </Card>
  );
};

export default CardPopularesUltimosL;
