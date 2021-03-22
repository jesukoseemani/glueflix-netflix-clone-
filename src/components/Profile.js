import React from 'react'
import netflixlogo from "../img/netflix-logo.png"
import netflixavatar from "../img/netflixavatar.png"
import styled from "styled-components"
import {motion} from "framer-motion"
// import Paymentshow from "../components/Paymentshow"
import {auth} from "../firebase"
import {useSelector} from "react-redux"

function Profile() {

  const {user} = useSelector((state) => state.user)

  return (
   <StyledProfile>
     <Showcase>
      <img className="logo" src={netflixlogo} alt="the-logo" />
      <img className="avatar" src={netflixavatar} alt="the-logo" />
    </Showcase>
    <Subscribe>
      <h2>Edit Profile</h2>
      <div className="subscribe_flex">
        <div className="avatar">
        <img src={netflixavatar} alt="the-logo" />
        </div>
        <div className="subscription">
          <div className="email_place">{user.email}</div>
          <p>Plans</p>
          <div className="empty"></div>

          {/* <Paymentshow /> */}

          <button onClick={() => auth.signOut()} className="btn-signout">Sign Out</button>
        </div>
      </div>
    </Subscribe>
   </StyledProfile>
  )
}
const StyledProfile = styled(motion.div)`

`


const Showcase = styled(motion.div)`
display: flex;
justify-content:space-between;
align-items: center;
width: 90%;
margin: 0 auto;

 .logo{
  width: 8rem;
  height: 6rem;
 }
 .avatar{
  width: 3rem;
  height: 3rem;
  margin-right: 3rem;
 }
`
const Subscribe = styled(motion.div)`
 position: absolute;
 top:35%;
 left:50%;
 transform: translate(-50%, -50%);
 
 
 
 h2{
   font-size: 4rem;
   margin-bottom: 1rem;
 }

.subscribe_flex{
  display: flex;
  
}

.avatar{
  margin-right: 1.5rem;
  
  img{
    width: 8rem;
    height: 8rem;
  }
}

.subscription{
  width: 40rem;
  p{
    font-size:1.75rem;
  }
  .email_place{
    background-color: #7c7575;
    padding:1rem 1rem;
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
  .empty{
    border: 1px solid gray;
    margin-bottom: 1.5rem;
  }
  .btn-signout{
    width: 100%;
    background-color: #E50914;
    padding:1rem 1rem;
    font-size: 1.6rem;
    margin-top: 1.5rem;
    color: #fafafa;
    border: none;
    outline: none;
    font-weight: bold;
    cursor: pointer;
  }
}
`

export default Profile
