import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";


const MenuH = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              fontWeight: "600"
            }}
          >
            Home
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link
            to="/ultimoslanzamientos"
            style={{
              textDecoration: "none",
              fontWeight: "600"
            }}
          >
            Ultimos Lanzamientos
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link
            to="/populares"
            style={{
              textDecoration: "none",
              fontWeight: "600"
            }}
          >
            Populares
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link
            to="/buscar"
            style={{
              textDecoration: "none",
              fontWeight: "600"
            }}
          >
            Buscar
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default MenuH;