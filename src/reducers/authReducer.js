function authReducer(state, action) {
   switch (action.type) {
      case "LOGIN":
         return { ...state, status: true }; // replace status in state to true
      case "LOGOUT":
         return { ...state, status: false }; // replace status in state to false
      default:
         throw Error("Unknown action " + action.type);
   }
}

export default authReducer;
