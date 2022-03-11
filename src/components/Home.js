import ListaPeliculas from "./ListaPeliculas";
import * as React from "react";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <div style={{ width: "100%"}}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          flexDirection: "row",
          p: 1,
          m: 3,
          bgcolor: "background.paper",
          maxWidth: 800,
          borderRadius: 1,
        }}
      >
        
        <Box sx={{ alignItems:"center", mr: 6, border: 1, width: "60%", p: 2 }}>
            <ListaPeliculas titulo="Peliculas Populares" url="popular" />
        
        </Box>
        
        <Box>
            <ListaPeliculas titulo="Peliculas mejor puntuadas" url="top_rated" />
        </Box>
        
      </Box>
    </div>
  );
};

export default Home;
