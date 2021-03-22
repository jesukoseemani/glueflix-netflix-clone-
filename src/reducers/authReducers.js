const initState = {
  user:null
}

const authReducers = (state = initState, action) => {
switch(action.type){
  case "USER_LOGIN":
    return {
      ...state,
      user: action.payload.user
    }
    case "USER_NOT_LOGIN":
    return {
      ...state,
      user: null
    }
    default:
      return{
        ...state
      }
  
}

}

export default authReducers