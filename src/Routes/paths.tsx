import Login from "../components/login/index"
import Home from "../components/Home";
import {Routes,Route } from "react-router-dom";
import { initializeApp } from 'firebase/app'
import { config } from '../config/config'
import AuthRoute from "../components/auth/authrouter";

initializeApp(config.firebaseConfig )


function Paths() {
  return (
    <Routes>
        <Route path="/" element={<AuthRoute> <Login/> </AuthRoute>}/>
        <Route path="/Home" element={<Home/>}/>
    </Routes>
  )
}

export default Paths