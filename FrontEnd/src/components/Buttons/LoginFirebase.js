import React from 'react'
import socialMediaAuth from '../../service/auth'
import {facebookProvider} from "../../config/authMethod"

function LoginFirebase() {
    const handleOnClick = async (provider) => {
            const res = await socialMediaAuth(provider);
            console.log(res);
    }
    return (
        <div>
        <button onClick={()=> handleOnClick(facebookProvider)}>facebook</button>
        </div>
    )
}

export default LoginFirebase
