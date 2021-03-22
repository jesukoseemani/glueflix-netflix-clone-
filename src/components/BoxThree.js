import React from 'react';
import styled from "styled-components"
import {motion} from "framer-motion"
import video3 from "../img/video-devices.m4v"
import image3 from "../img/device-pile.png"

function BoxThree() {
  return (
    <Styledboxthree>
    <Box3>
      <Box3contenttext>
      <h3>Watch everywhere.</h3>
         <p>Stream unlimited movies and TV shows on<br/> your phone, tablet, laptop, and TV without<br/> paying more.</p>
      </Box3contenttext>
      <Box3contentloop>
          <img src={image3} alt="tv" />
          <video src={video3} controls="controls" autoplay="true" playsinline="true" muted="true" loop="true"/>
      </Box3contentloop>
    </Box3>
  </Styledboxthree>
  );
}
const Styledboxthree = styled(motion.section)`
  
`
const Box3 = styled(motion.div)`
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
const Box3contenttext = styled(motion.div)`
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 37.5em){
    align-self: center;
}

 h3 {
  font-size: 4.5rem;
  font-weight: 800;
}
p{
  font-size: 2.5rem;
  line-height: 1.5;
  
}
`
const Box3contentloop = styled(motion.div)`
 position: relative;
 img {
  padding-top: 1.9rem;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 3;
}
video{
  position: absolute;
  width: 65%;
  height: 65%;
  top: 2%;
  left: 17.5%;
}

`
export default BoxThree;
