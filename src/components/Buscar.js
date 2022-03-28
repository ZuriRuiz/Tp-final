import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const Buscar = () => {
    return (
        <Box sx={{m: 10, display: "flex", flexDirection: "row", justifyContent: "center"}}>
        <SearchIcon sx={{mt: 2}} />
        <TextField
        label="Buscar Peliculas"
        id="filled-size-normal"
        defaultValue=""
        variant="filled"
      />
      </Box>
    )
}

export default Buscar;