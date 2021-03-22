import Globalstyles from "./components/Globalstyles"
import Home from "./pages/Home"
import Getstarted from "./pages/Getstarted"
import {Route, Switch } from "react-router-dom"
import {useEffect} from "react"
import {auth} from "./firebase"
import {useDispatch, useSelector} from "react-redux"
import Profile from "./components/Profile"

function App() {
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.user)

 useEffect(() => {
  const unsubscribe =  auth.onAuthStateChanged((authUser) => {
        if(authUser){
           dispatch({
             type: "USER_LOGIN",
             payload:{
               user: {
                uid: authUser.uid,
                email: authUser.email
               }
              
             }
           })
        }else{
          dispatch({
            type: "USER_NOT_LOGIN",
          })
        }
   });
   return unsubscribe
 },[dispatch])


  const userActive = user
  
  return (
    <div className="App">
     <Globalstyles />
     {!userActive ? <Getstarted /> :
     <Switch>
     <Route path="/" exact>
      <Home />
     </Route>
     <Route path="/profile" exact >
       <Profile />
     </Route>
   </Switch> 
     }
     
    </div>
  );
}

export default App;
