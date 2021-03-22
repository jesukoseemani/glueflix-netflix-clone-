import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import plus from "../img/plus.png"
import times from "../img/times.png"

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <Styledtoggle>
      <motion.h4 layout>{title}</motion.h4>
      {/* <FontAwesomeIcon layout icon={toggle ? faTimes : faPlus} size="3x" /> */}
      <motion.img src={toggle ? times : plus} alt="plus/times"/>
      </Styledtoggle>
      
      {toggle ? children : ""}
      
    </motion.div>
  );
};

const Styledtoggle = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
  background-color: rgb(46, 45, 45);
  padding: 2rem 3.5rem 2rem 3.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  img{
    width:3rem;
    height: 3rem;
  }
  h4 {
  font-size: 2.8rem;
  font-weight: 300;
}
`
export default Toggle;
