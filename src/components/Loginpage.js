import React, {useRef}from 'react';
import netflixlogo from "../img/netflix-logo.png"
import netflixbanner from "../img/netflix-banner.jpg"
import styled from "styled-components"
import {motion} from "framer-motion"
import {useDispatch} from "react-redux"
import {auth} from "../firebase"

function Loginpage() {
const dispatch = useDispatch();
const emailRef = useRef(null)
const passwordRef = useRef(null)
  const quench = () => {
    dispatch({
      type: "NOT_LOGIN",
    })

  }

const register = (e) => {
e.preventDefault()
 auth.createUserWithEmailAndPassword(
  emailRef.current.value,
  passwordRef.current.value
 ).then(userAuth => console.log(userAuth))
 .catch(err => alert(err.message))
 
}

const signIn = (e) => {
  e.preventDefault();

  auth.signInWithEmailAndPassword(
    emailRef.current.value,
    passwordRef.current.value
  ).then((userAuth) => {console.log(userAuth)})
   .catch(err => alert(err.message))
  
}

  return (
    <Headerpart>
    <Showcasetop>
      <img src={netflixlogo} alt="the-logo" />
      <button onClick={quench} class="btn btn-primary">Home</button>
    </Showcasetop>
    <Styledform>
      <form className="form">
      <h2>Welcome to Netflix</h2>
      <p>you must fill in your email & password before you sign-Up or sign-In</p>
      <input ref={emailRef} type="email" placeholder="Email"/>
      <input ref={passwordRef} type="password" placeholder="Password"/>
      <input onClick={signIn} type="submit" value="Sign In" />
      <p>New to Netflix? <span onClick={register} className="sign_span">Sign up now.</span></p>
      </form>
  </Styledform>
    </Headerpart>
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
const Styledform = styled.div`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 width:30rem;
 background-color: rgba(0,0,0,0.6);
 z-index: 99;

.form{
  padding: 3rem;
  width: 100%;
}

h2{
  margin: 2rem 0;
}

input{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: none;
  outline: none;
  border-radius: .3rem;
  padding: 1rem .5rem; 
}

input[type = email]{
  margin-bottom: 1rem;
}

input[type = password]{
  margin-bottom: 2rem;
}

input[type = submit]{
  margin-bottom: 2rem;
  background-color: #bb1019;
  color: #fafafa;
  cursor: pointer;
  opacity: 0.6;
  &:hover {
  opacity: 1;
}
}

p{
 font-size: 1.4rem;
 font-weight: bold;
 color: #575757
}
.sign_span{
cursor: pointer;
color: white;
&:hover{
  text-decoration: underline;
}
}
`
export default Loginpage;
