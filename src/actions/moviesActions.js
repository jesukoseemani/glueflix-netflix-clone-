import axios from "axios";
import {
  trending_URL,
  netflixOriginals_URL,
  topRated_URL,
  actionMovies_URL,
  comedyMovies_URL,
  horrorMovies_URL,
  romanceMovies_URL,
  documentariesMovies_URL
} from "../Api"


export const moviesActions = () => async (dispatch) => {

const fetchTrending = await axios.get(trending_URL())
const fetchNetflixOriginals = await axios.get(netflixOriginals_URL())
const fetchTopRated = await axios.get(topRated_URL())
const fetchActionMovies = await axios.get(actionMovies_URL())
const fetchComedyMovies = await axios.get(comedyMovies_URL())
const fetchHorrorMovies = await axios.get(horrorMovies_URL())
const fetchRomanceMovies = await axios.get(romanceMovies_URL())
const fetchDocumentariesMovies = await axios.get(documentariesMovies_URL())


dispatch({
  type: "FETCH_MOVIES",
  payload: {
    trending: fetchTrending.data.results,
    netflixOriginals: fetchNetflixOriginals.data.results ,
    topRated: fetchTopRated.data.results,
    actionMovies: fetchActionMovies.data.results,
    comedyMovies: fetchComedyMovies.data.results ,
    horrorMovies: fetchHorrorMovies.data.results,
    romanceMovies: fetchRomanceMovies.data.results,
    documentariesMovies: fetchDocumentariesMovies.data.results,
  }
})
}