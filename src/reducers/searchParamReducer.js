function searchParamReducer(state, action) {
   switch (action.type) {
      case "SIMPLE_SEARCH":
         return { ...state, searchParam: action.payload }
      case "ADVANCED_SEARCH":
         return { ...state, searchParam: action.payload };
      default:
         throw Error("Unknown action " + action.type);
   }
}

export default searchParamReducer;