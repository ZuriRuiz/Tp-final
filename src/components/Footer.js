import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



const Footer = () => {
    return(
        <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ alignItems: "center", bgcolor: "#001529"}}>
        <Toolbar>
          
        <Typography variant="h9">
            Creado por Zuri 
        </Typography>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
    
export default Footer;
