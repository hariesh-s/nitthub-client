import { createContext, useReducer } from "react";
import searchParamReducer from "../reducers/searchParamReducer";

export const SearchParamContext = createContext();

export default function SearchParamContextProvider({ children }) {
   const [searchParam, dispatchSearchParam] = useReducer(searchParamReducer, {
      query: "",
      course: "",
      prof: "",
   });
   console.log(searchParam);
   return (
      <SearchParamContext.Provider value={{ searchParam, dispatchSearchParam }}>
         {children}
      </SearchParamContext.Provider>
   );
}
