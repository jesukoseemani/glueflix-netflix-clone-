import React from 'react';
import netflixlogo from "../img/netflix-logo.png"
import netflixavatar from "../img/netflixavatar.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components"
import {motion} from "framer-motion"
import {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"


function Nav() {
  const history = useHistory()
 const [scroll, setScroll] = useState(false)

 const scrollFunction = () => {
   if(window.scrollY > 100){
     setScroll(true)
   }else{
    setScroll(false)
   }
 }

 useEffect(() => {
   window.addEventListener("scroll", scrollFunction);

   return () => window.removeEventListener("scroll", scrollFunction);
 },[])

  return (
    <Stylednav style={{backgroundColor : scroll ? "rgba(0,0,0,0.8)" : "transparent"}}>
  <Logosearch>
   <Logo>
   <img src={netflixlogo} alt="logo"/>
   </Logo>
   <Search>
   <FontAwesomeIcon icon={faSearchPlus} size="2x"  />
   <img onClick={() => history.push("/profile") } src={netflixavatar} alt="logo-avatar"/>
   </Search>
   </Logosearch>
     <Styledlist>
     <Styledunderlist>
       <li>Series</li>
       <li>films</li>
       <li>My List</li>
     </Styledunderlist>
     </Styledlist>
      
    </Stylednav>
  );
}

const Stylednav = styled(motion.div)`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: none;
position: fixed;
top: 0;
left: 0;
z-index: 999;
transition: all 1s ease;
`
const Logosearch = styled(motion.div)`
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
/* margin: 1rem 2rem; */
`
const Logo = styled(motion.div)`
img{
width: 10rem;
height: 8rem;
}
`
const Search = styled(motion.div)`
display: flex;
justify-content: center;
align-items: center;
color: #fafafa;

img{
width: 3rem;
height: 3rem;
margin-left:2rem;
cursor: pointer;
}
`
const Styledlist = styled(motion.div)`
width: 65%;
/* margin: 0 auto; */
`
const Styledunderlist = styled(motion.ul)`
 display: flex;
 justify-content: space-between;
 align-items: center;
 list-style: none;
 li{
   color: #fafafa;
   font-size: 1.7rem;
   font-weight: 200;
 }
`

export default Nav;
