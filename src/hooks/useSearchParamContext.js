import { useContext } from "react";
import { SearchParamContext } from "../contexts/SearchParamContext";

function useSearchParamContext() {
   const context = useContext(SearchParamContext);

   if (!context)
      throw Error("SearchParamContext can be used only inside SearchParamContextProvider!");

   return context;
}

export default useSearchParamContext;