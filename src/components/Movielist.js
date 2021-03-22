import React from 'react';
import styled from "styled-components"
import {motion} from "framer-motion"


function Movielist({title, movies}) {


  return (
    <Styledmovielist>
      <h2>{title}</h2>
      <Flex>
      {movies.map( movie => (
        movie.backdrop_path && (
        <img className="image_small" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.name || movie.title || movie.original_name} key={movie.imdb_id}/>)
      ))}
       </Flex>
    </Styledmovielist>
  );
}
// movie.poster_path
const Styledmovielist = styled(motion.div)`
background-color: #1a1717;
  color: #fafafa;
  padding: 1rem;
  h2{
    padding-left: 1.3rem;
  }

`

const Flex = styled(motion.div)`
  display: flex;
  overflow-y:hidden;
  overflow-x: scroll;
  padding:2rem;
  
  &::-webkit-scrollbar{
      display:none;
  }

   .image_small{
    width: 100%;
    max-height: 15rem;
    object-fit: contain;
    margin-right: 1rem;
    transition: transform 150ms;
    opacity: 0.8;
    cursor: pointer;
      &:hover{
        transform: scale(1.04);
        opacity: 1;
      }
   }

`

export default Movielist;
