import { useState } from "react";
import useFetchPeliculas from "./useFetchPeliculas";
import Paginado from "../components/Paginado"



const usePaginado = () => {
    const [page, setPage] = useState(1);
    const { peliculas, totalPages } = useFetchPeliculas("popular", page);
    
    const handleClickNext = () => {
        setPage(page + 1);
      };
    
      const handleClickPrev = () => {
        setPage(page - 1);
      };
    
    return ({
        page: page,
        handleClickPrev: handleClickPrev,
        handleClickNext: handleClickNext
    })
}

export default usePaginado;