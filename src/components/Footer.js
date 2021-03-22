import React from 'react';
import styled from "styled-components"
import {motion} from "framer-motion"

function Footer() {
  return (
    <Styledfooter>
    <h4>Questions?Contact us.</h4>
    <Footergrid>
      <List>
        <ul>
          <li>FAQ</li>
          <li>Investor Relations</li>
           <li>Privacy</li>
          <li>Speed Test</li>

        </ul>
      </List>
      <List>
        <ul>
          <li>Help Center</li>
          <li>Job</li>
          <li>Cookies Preferences</li>
          <li>Legal Notices</li>

        </ul>
      </List>
      <List>
        <ul>
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Netflix Original</li>

        </ul>
      </List>
      <List>
        <ul>
          <li>Media Center</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </List>
      
    </Footergrid>
    <h4>Netflix-Nigeria cloned by Dev. jesukoseemani</h4>
  </Styledfooter>
  );
}

const Styledfooter = styled(motion.footer)`
padding: 10rem 13rem;
max-width: 115rem;
margin: 0 auto;
h4 {
  padding: 2.5rem 0;
  font-size: 1.65rem;
  opacity: 0.4;
  font-weight: bold;
}
`
const Footergrid = styled(motion.div)`
 display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-content: center;
  align-items: center;
  grid-gap: 4rem;
`
const List = styled(motion.div)`
opacity: 0.4;
li{
  font-size: 1.3rem;
  padding: 1rem 0;
  list-style: none;
}
`


export default Footer;
