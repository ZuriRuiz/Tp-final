import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Paginado = ({ handleClickPrev, handleClickNext, page, totalPages }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        m: 5,
      }}
    >
      <Button
        sx={{ mr: 2, bgcolor: "#3B3C36" }}
        onClick={handleClickPrev}
        variant="contained"
        disabled={page === 1}
      >
        Prev
      </Button>

      <Typography sx={{ m: 1 }}>pagina {page}</Typography>

      <Button
        sx={{ mr: 2, bgcolor: "#3B3C36" }}
        onClick={handleClickNext}
        variant="contained"
      >
        Next
      </Button>
    </Box>
  );
};

export default Paginado;
