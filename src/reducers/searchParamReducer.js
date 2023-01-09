function searchParamReducer(state, action) {
   switch (action.type) {
      case "SEARCH":
         return { ...state, searchParam: action.payload }
      default:
         throw Error("Unknown action " + action.type);
   }
}

export default searchParamReducer;