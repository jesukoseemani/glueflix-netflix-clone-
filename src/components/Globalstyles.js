import {createGlobalStyle} from "styled-components"


const Globalstyles = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
html{
  font-size: 10px;
  color: #fafafa;
  &::-webkit-scrollbar{
      width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb{
      background-color: #E50914;
  }
  &::-webkit-scrollbar-track {
background: white;
}

@media (max-width: 57.94em){
  font-size: 50%;
}

}
body{
  font-family: 'arial', sans-serif;
  width: 100%;
  /* position: relative; */
  /* overflow-x: hidden; */
  background-color: #141414;
  
/* @media (max-width: 28.13em){
  width: fit-content;
} */
}
h2{
  font-size: 2.5rem;
  font-weight: lighter;
}

h3{
  font-size: 1.1rem;
 
}
p{
  font-size: 1rem;
  color: #fafafa
}

img{
  width: 100%;
  display: block;
}

input{
font-weight: bold;
font-family: "arial", sans-serif;
}

section {
  border-bottom: 8px solid grey;
  padding-bottom: 4rem;
}
`;

export default Globalstyles;
