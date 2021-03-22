import React from 'react';
import styled from "styled-components"
import {motion} from "framer-motion"
import video1 from "../img/video-tv-0819.m4v"
import image1 from "../img/tv.png"

function BoxOne() {
  return (
    <Styledboxone>
    <Box1>
      <Box1contenttext>
        <h3>Enjoy on your TV.</h3>
         <p>Watch on Smart TVs,Playstation,Xbox,<br/>Chromecast,Apple TV,Blu-ray players, and<br/> more.</p>
      </Box1contenttext>
      <Box1contentloop>
          <img src={image1} alt="tv" />
          <video src={video1} controls="controls" autoplay="true" playsinline="true" muted="true" loop="true"/>
      </Box1contentloop>
    </Box1>
  </Styledboxone>
  );
}
const Styledboxone = styled(motion.section)`
  
`
const Box1 = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 115rem;
  margin: 0 auto;
  padding: 4rem;
  min-height: 45vh;

  @media (max-width: 37.5em){
    flex-direction: column;
    align-content: center;
}

`
const Box1contenttext = styled(motion.div)`
 flex: 0 0 55%;

 @media (max-width: 37.5em){
    align-self: center;
}
 h3 {
  font-size: 5rem;
  font-weight: 800;
}
p{
  font-size: 2.5rem;
  line-height: 1.5;
}
`
const Box1contentloop = styled(motion.div)`
 position: relative;
 img {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 3;
}
video{
  position: absolute;
  width: 90%;
  top: 20%;
  right: 0;
}

`
export default BoxOne;
