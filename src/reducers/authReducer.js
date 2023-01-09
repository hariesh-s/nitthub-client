function authReducer(state, action) {
   switch (action.type) {
      case "LOGIN":
         return { ...state, auth: { accessToken: action.payload }}; // update accessToken
      case "LOGOUT":
         return { ...state, auth: { accessToken: "" }}; // reset accessToken to empty
      default:
         throw Error("Unknown action " + action.type);
   }
}

export default authReducer;
