import React from 'react';
import netflixlogo from "../img/netflix-logo.png"
import netflixbanner from "../img/netflix-banner.jpg"
import styled from "styled-components"
import {motion} from "framer-motion"
import {useDispatch} from "react-redux"

function Header() {
 const dispatch = useDispatch()
  const fire = () => {
    dispatch({
      type: "IS_LOGIN",
    })
  }

  return (
  <>  
    <Headerpart>
    <Showcasetop>
      <img src={netflixlogo} alt="the-logo" />
      <button onClick={fire} class="btn btn-primary">Sign In</button>
    </Showcasetop>
    <Hero>
      
  <h2>Unlimited movies, TV <br/> shows, and more.</h2>
  <span class="hero-span">Watch anywhere.Cancel anytime.</span>
  <div class="input">
              <input type="email" name="email" className="email" placeholder="Email Address" />
              <input onClick={fire} type="submit" name="submit" value="Get started >" className="submit" />
  </div>
        
  <div class="hero-content-small">
          <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
  </div>
    
        </Hero>
      </Headerpart>
      <Blank></Blank>
  </>
  );
}

const Headerpart = styled(motion.div)`
  position: relative;
  height: 100vh;
  width: 100%;
  background: url(${netflixbanner})
    no-repeat center;
  background-size: cover;
  
  &::after{
  content: "";
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
  }
`
const Showcasetop = styled(motion.div)`
 position: relative;
  height: 7rem;
  width: 100%;
  z-index: 2;
  
  img {
  position: absolute;
  width: 14rem;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);

  @media (max-width: 37.5em){
    left: 20%;
}
}

button {
  color: #fafafa;
  background: red;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  font-size: 1.4rem;
  font-weight: 400;
  cursor:pointer;
}

.btn {
  border: 1px black solid;
  border-radius: 0.5rem;
  display: inline-block;
  outline: 0;
  padding: 0.8rem 2rem;
  opacity: 0.6;
}
.btn:hover {
  opacity: 1;
}
`
const Hero = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 13rem 0rem 3rem 0;
  z-index: 3;
  .hero-content-small{
    font-size: 1.8rem;
    margin-top: -2rem;

    @media (max-width: 48.81em){
      font-size: 1.5rem;
}
  }
  h2{
    font-size: 4.2rem;
  display: block;
  font-weight: 800;
  padding: 0;

  @media (max-width: 48.81em){
      font-size: 3rem;
}
  }
  .hero-span{
  font-size: 2.3rem;
  color: white;
  font-weight: 500;
  
  @media (max-width: 48.81em){
      font-size: 1.8rem;
}
  }
  .input{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 0;
  width: 80%;

  @media (max-width: 37.5em){
    flex-wrap: wrap;
}
/* input::-webkit-input-placeholder {
   padding-left: 6px;
}

input:-ms-input-placeholder { 
  padding-left: 6px;
}

input::placeholder {
  padding-left: 6px;
} */

.email{
  padding: 21px 0 21px 8px;
  flex: 0 0 60%;
  outline: none;
  }

  .submit{
  padding: 18px 0 20px 0;
  margin-right: 1rem;
  background-color: red;
  text-transform: uppercase;
  color: #fafafa;
  font-size: 1.8rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  opacity: 0.8;
  font-weight: bold;
  cursor: pointer;
  flex: 0 0 20%;

  &:hover {
  opacity: 1;
}
  }
  }
  `
const Blank = styled(motion.section)`
  height: 5vh;
  width: 100%;
  
`
export default Header;
