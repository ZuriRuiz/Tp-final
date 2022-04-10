import { useState } from "react";



const usePaginado = () => {
    const [page, setPage] = useState(1);
    
    
    const handleClickNext = () => {
        setPage(page + 1);
      };
    

      const handleClickPrev = () => {
        setPage(page - 1);
      };
    
    return ({
        page: page,
        handleClickNext: handleClickNext,
        handleClickPrev: handleClickPrev,
        
    })
}

export default usePaginado;