import React from 'react';
import styled from "styled-components"
import {motion} from "framer-motion"


function Movielistchange({title, movies}) {


  return (
    <Styledmovielist>
      <h2>{title}</h2>
      <Flex>
      {movies.map( movie => (
        movie.poster_path && (
        <img className="image_large" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.name || movie.title || movie.original_name} key={movie.imdb_id} />)
      ))}
       </Flex>
    </Styledmovielist>
  );
}

const Styledmovielist = styled(motion.div)`
background-color: #1a1717;
  color: #fafafa;
  padding: 2rem;

`

const Flex = styled(motion.div)`
  display: flex;
  overflow-y:hidden;
  overflow-x: scroll;
  padding:2rem;
  
  &::-webkit-scrollbar{
      display:none;
  }

   .image_large{
    width: 100%;
    max-height: 25rem;
    object-fit: contain;
    margin-right: 1rem;
    opacity: 0.8;
    transition: transform 150ms;
    cursor: pointer;
      &:hover{
        transform: scale(1.08);
        opacity: 1;
      }
   }

   
`

export default Movielistchange;
