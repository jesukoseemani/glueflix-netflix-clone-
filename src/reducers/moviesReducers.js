const initState = {
  trending: [],
  netflixOriginals: [],
  topRated: [],
  actionMovies: [],
  comedyMovies: [],
  horrorMovies: [],
  romanceMovies: [],
  documentariesMovies: [],  
}

const moviesReducers = (state = initState, action) => {

    switch(action.type){
        case "FETCH_MOVIES":
          return {
            ...state,
            trending: action.payload.trending,
            netflixOriginals: action.payload.netflixOriginals,
            topRated: action.payload.topRated,
            actionMovies: action.payload.actionMovies,
            comedyMovies: action.payload.comedyMovies,
            horrorMovies: action.payload.horrorMovies,
            romanceMovies: action.payload.romanceMovies,
            documentariesMovies: action.payload.documentariesMovies,
          }  
        default:
          return {...state}
    }
  
}

export default moviesReducers;