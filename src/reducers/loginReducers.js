const initState = {
  login: false
}


const loginReducers = (state = initState, action) => {

    switch(action.type){
       case "IS_LOGIN" : 
          return {
            ...state,
            login: true,
          }
       case "NOT_LOGIN" : 
          return {
            ...state,
            login: false,
          }
      default :
      return{
        ...state
      }
}

}

export default loginReducers