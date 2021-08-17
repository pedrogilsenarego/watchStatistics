import React, {useState, useEffect} from 'react'
import socialMediaAuth from './service/auth'
import firebase from './config/firebase-config'
import {facebookProvider, githubProvider, googleProvider} from "./config/authMethod"

function LoginFirebase() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=> {
        firebase.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
        })
    }, [])

    const handleOnClick = async (provider) => {
            const res = await socialMediaAuth(provider);
            console.log(res);
    }
    return (
        <div>
        <button onClick={()=> handleOnClick(facebookProvider)}>facebook</button>
        <button onClick={()=> handleOnClick(githubProvider)}>github</button>
        <button onClick={()=> handleOnClick(googleProvider)}>Google</button>
        {currentUser && <p>{currentUser.displayName}</p>}
        </div>
    )
}

export default LoginFirebase