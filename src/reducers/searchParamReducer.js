function searchParamReducer(state, action) {
   switch (action.type) {
      case "SEARCH":
         return { ...state, ...action.payload }
      default:
         throw Error("Unknown action " + action.type);
   }
}

export default searchParamReducer;