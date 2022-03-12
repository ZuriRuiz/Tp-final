import ListaPeliculas from "./ListaPeliculas";
import * as React from "react";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    
    <div>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          justifyContent: 'space-between',
          p: 3,
          m: 3
          
        }}
      >
      
        <Box sx={{ border: 1, m: 3, p: 3, width: "30%" }}>
          <ListaPeliculas titulo="Peliculas Populares" url="popular" />
        </Box>
        
        <Box sx={{ border: 1, m: 3, p: 3, width: "30%"}}>
          <ListaPeliculas titulo="Peliculas mejor puntuadas" url="top_rated" /> 
        </Box>
        
      </Box>
      
    </div>
      
        
        
      
    
  );
};

export default Home;
