import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "#001529" }} position="static">
        <Toolbar>
          <MovieCreationIcon />
          <Typography
            variant="h7"
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              pl: 3,
              color: "white",
            }}
          >
            <Link to="/">Home</Link>
          </Typography>

          <Typography
            variant="h7"
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              pl: 3,
              color: "white",
            }}
          >
            <Link to="/ultimoslanzamientos">Ultimos Lanzamientos</Link>
          </Typography>
          <Typography
            variant="h7"
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              pl: 3,
              color: "white",
            }}
          >
            <Link to="/populares">Populares</Link>
          </Typography>
          <Typography
            variant="h7"
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              pl: 3,
              color: "white",
            }}
          >
            <Link to="/buscar">Buscar</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
