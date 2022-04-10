import ListaPeliculas from "./ListaPeliculas";
import * as React from "react";
import Carrusel from "./Carrusel";
import Box from "@mui/material/Box";


const Home = () => {
  return (
    
   
    <div>
      <Carrusel />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          mt: 2
        }}
      >
      
        <Box sx={{ border: 1, m: 3, p: 1}}>
          <ListaPeliculas titulo="Peliculas Populares" url="popular" />
        </Box>
        
        <Box sx={{ border: 1, m: 3, p: 1}}>
          <ListaPeliculas titulo="Peliculas mejor puntuadas" url="top_rated" /> 
        </Box>
        
      </Box>
      
    </div>
      
        
        
      
    
  );
};

export default Home;
