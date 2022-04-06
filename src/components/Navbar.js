import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "#000000", color: "white" }} >
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
            <MenuItem component={Link} to="/">Home</MenuItem>
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
            <MenuItem component={Link} to="/ultimoslanzamientos">Ultimos Lanzamientos</MenuItem>
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
            <MenuItem component={Link} to="/populares">Populares</MenuItem>
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
            <MenuItem component={Link} to="/buscar">Buscar</MenuItem>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
