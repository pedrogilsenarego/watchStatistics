import React from 'react'
import socialMediaAuth from './service/auth'
import {facebookProvider, githubProvider, googleProvider} from "./config/authMethod"

function LoginFirebase() {
    const handleOnClick = async (provider) => {
            const res = await socialMediaAuth(provider);
            console.log(res);
    }
    return (
        <div>
        <button onClick={()=> handleOnClick(facebookProvider)}>facebook</button>
        <button onClick={()=> handleOnClick(githubProvider)}>github</button>
        <button onClick={()=> handleOnClick(googleProvider)}>Google</button>
        </div>
    )
}

export default LoginFirebase
