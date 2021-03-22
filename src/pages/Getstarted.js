import React from 'react';
import Header from "../components/Header"
import BoxOne from "../components/BoxOne"
import BoxTwo from "../components/BoxTwo"
import BoxThree from "../components/BoxThree"
import Faq from "../components/Faq"
import Footer from "../components/Footer"
import Loginpage from "../components/Loginpage"
import {useSelector} from "react-redux"

function Getstarted() {
 
 const {login} = useSelector((state) => state.login)
  return (
    <>
   {login ? (<Loginpage />) : (
    <>
    <Header />
    <BoxOne />
    <BoxTwo />
    <BoxThree />
    <Faq />
    <Footer />
  </>

   )}
   </>
    
  );
}


export default Getstarted;
