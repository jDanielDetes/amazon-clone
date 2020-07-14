import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header'
import Home from "./Components/Home"
import Checkout from "./Components/Checkout";
import Login from './Components/Login'
import {useStateValue} from './StateProvider'
import {auth} from './firebase'

function App() {
    const [{user}, dispatch] = useStateValue();

    useEffect(() =>{
        auth.onAuthStateChanged((authUser) => {
            if(authUser){
                //user is logged in 
                dispatch({
                    type:'SET_USER',
                    user:authUser
                })
            } else {
                //user is logged out
                dispatch({
                    type:'SET_USER',
                    user:null
                })
            }
        })

        return () =>{
            // Any cleanup operations go here
            unsubscribe();
        }

    },[])


  return (
    <Router>
      <div className="app">
          <Switch>
            <Route path="/checkout">
            <Header/>
            <Checkout/>
            </Route>
            <Route path="/login">
                <Login/>
           
            </Route>
            {/*this is the default route */}
            <Route path="/">
                <Header/>
                <Home/>
                </Route>
          </Switch>
 
      </div>
    </Router>
  );
}

export default App;
