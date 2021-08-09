import React from 'react'

import {GoogleLogin, GoogleLogout} from "react-google-login"


import {Container} from "@material-ui/core";

const clientId="851137477773-vglvhjo7s7087gkbodilqtsolmdrol2p.apps.googleusercontent.com"



function LogoutGoogle ()  {

    const onSucess = (res) => {
        console.log("[LOGOUT SUCESS] CurrentUser:", res.profileObj);
    }

       
    return (
        <Container maxWidth="md">
            <div >
            <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSucess={onSucess}
            
            
            
            ></GoogleLogout>
                       
            </div>
        </Container>
        )}

export default LogoutGoogle