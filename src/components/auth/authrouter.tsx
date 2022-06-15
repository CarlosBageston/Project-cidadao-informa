import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface IAuthRoutepagepros {children: any }

const AuthRoute: React.FunctionComponent<IAuthRoutepagepros> = props => {
    const { children } = props;
    const auth = getAuth()
    const navigate = useNavigate();
    const [loading, setloading] = useState(true)

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if(user) {
            setloading(false)
        } else {
            navigate('/home')
        }
    });
    
    useEffect(() => {
        AuthCheck()
    },[auth])


    if(loading) return<p>loading...</p>

    return<div> {children} </div>
}
export default AuthRoute