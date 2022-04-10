import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import Button from "@mui/material/Button";
import MenuH from "./MenuH";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ bgcolor: "#000000", color: "white" }} >
        <Toolbar>
          <MovieCreationIcon />
         
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "inline",
              },
            }}
          >
            <Button color="inherit">
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Home
              </Link>
            </Button>

            <Button color="inherit">
              {" "}
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/ultimosLanzamientos"
              >
                Últimos Lanzamientos
              </Link>
            </Button>

            <Button color="inherit">
              {" "}
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/populares"
              >
                Populares
              </Link>
            </Button>
            
            <Button color="inherit">
              {" "}
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/buscar"
              >
                Buscador
              </Link>
            </Button>
            
          </Box>
          <Box
            sx={{
              display: {
                xs: "inline",
                sm: "inline",
                md: "none"
              },
            }}
          >
            <MenuH />
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
