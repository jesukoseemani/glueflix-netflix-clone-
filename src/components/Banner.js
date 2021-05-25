import React, {useState, useEffect} from 'react';
import styled from "styled-components"
import {motion} from "framer-motion"
import {useSelector} from "react-redux"



function Banner() {
 const {trending} = useSelector((state) => state.movies)

  const [movies, setMovies] = useState([])
  

  useEffect(() => {
     setMovies(trending[Math.floor(Math.random() * trending.length - 1)])
  },[trending])


  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n-1) + "..." : string
  }

  return (
    <Styledbanner style ={{
      background: `linear-gradient(
        to right,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.4)
      ), url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}") center no-repeat`
    }}>
      <Bannerdescription>
        <h2>{movies?.title || movies?.name || movies?.original_name}</h2>
        <Btnbanner>
          <button className="btn">Play</button>
          <button className="btn">My List</button>
        </Btnbanner>
      <p>{truncate(movies?.overview, 250)}
        </p>
      </Bannerdescription>
     <Bannerfade>
     </Bannerfade>
    </Styledbanner>
  );
}

const Styledbanner = styled(motion.div)`
width:100%;
height: 85vh;
background-size: cover;
object-fit: contain;
position: relative;
top:0;
left: 0;
border: none;

`

const Bannerdescription = styled(motion.div)`
position: absolute;
width: 40vw;
top: 45%;
left: 4%;
@media (max-width: 560px){
  width: 90vw;
}
h2{
  font-size: 3rem;
  font-weight: bold;
}
p{
  font-size: 1.65rem;
  line-height: 100%;
}
`
const Btnbanner = styled(motion.div)`
display: flex;
align-items: center;
margin:1rem 0rem;
.btn{
  border: 1px #3d3d3d solid;
  outline: 0;
  padding: 0.8rem 2.5rem;
  opacity: 0.4;
  color:#fafafa;
  background-color: #3d3d3d;
  margin-right: 2rem;
  &:hover{
    opacity: 1
  }
}
`
const Bannerfade = styled(motion.div)`
width: 100%;
height: 10rem;
background-size:cover;
position:absolute;
bottom: 0;
left: 0;
z-index: 3;
background-image: linear-gradient(180deg, transparent, rgba(37,37,37, 0.61), #111);
border: none;
`

export default Banner;
