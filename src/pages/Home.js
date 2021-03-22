import React, {useEffect} from 'react';
import Nav from "../components/Nav"
import Banner from "../components/Banner"
import {moviesActions} from "../actions/moviesActions"
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import Movielist from "../components/Movielist"
import Movielistchange from "../components/Movielistchange"

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(moviesActions())
  },[dispatch])

  const {
    trending, 
    netflixOriginals, 
    topRated, 
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentariesMovies  
  } = useSelector((state) => state.movies)

  return (
    <>
      <Nav />
      <Banner />
      <Movielistchange title="NETFLIX ORIGINAL" movies={netflixOriginals} />
      <Movielist title="Trending Now" movies= {trending}/>
      <Movielist title="Top Rated" movies={topRated}/>
      <Movielist title="Action" movies={actionMovies}/>
    
      <Movielist title="Comedy" movies={comedyMovies} />
      <Movielist title="Horror" movies={horrorMovies}/>
      <Movielist title="Romance" movies={romanceMovies}/>
      <Movielist title="Documentaries" movies={documentariesMovies}/>
      
    </>
  );
}

export default Home;
