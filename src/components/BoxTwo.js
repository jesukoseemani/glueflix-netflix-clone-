import React from 'react';
import styled from "styled-components"
import {motion} from "framer-motion"
import image2 from "../img/mobile-0819.jpg"

function BoxTwo() {
  return (
    <Styledboxtwo>
    <Box2>
      <Box2contentimage>
          <img src={image2} alt="mobile" / >
          
      </Box2contentimage>
      <Box2contenttext>
        <h3>Download your shows<br/> to watch offline.</h3>
         <p>Save your favorites easily and always have<br/> something to watch.</p>
      </Box2contenttext>
    </Box2>
    </Styledboxtwo>
  );
}
const Styledboxtwo = styled(motion.section)`
  
`
const Box2 = styled(motion.div)`
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
const Box2contenttext = styled(motion.div)`
 flex: 0 0 55%;
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 37.5em){
    align-self: center;
}
h3 {
  font-size: 4rem;
  font-weight: 800;
}
p {
  font-size: 2.5rem;
  line-height: 1.5;
  padding-top: 2rem;
}
`
const Box2contentimage = styled(motion.div)`
margin-right: 3rem;

`
export default BoxTwo;
