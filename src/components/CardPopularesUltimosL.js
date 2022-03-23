import Typography from '@mui/material/Typography';

const CardPopularesUltimosL = ({titulo, imagen, link}) => {
    return (
        <div>
        <Typography sx={{ pl: 1, pt: 1, }}>{titulo}</Typography>
        <img src = {imagen}></img>
        
        </div>
    )
}


export default CardPopularesUltimosL;