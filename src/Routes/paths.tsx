import Login from "../components/login/index"
import Home from "../components/Home";

import {
  Routes,
  Route,
} from "react-router-dom";

function Paths() {
  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
    </Routes>
  )
}

export default Paths