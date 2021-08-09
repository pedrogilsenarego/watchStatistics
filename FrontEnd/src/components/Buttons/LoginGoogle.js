import React from 'react'

import {GoogleLogin} from "react-google-login"
import { refreshTokenSetup } from './RefreshTokenGoogleLogin';

import {Container} from "@material-ui/core";

const clientId="851137477773-vglvhjo7s7087gkbodilqtsolmdrol2p.apps.googleusercontent.com"



function LoginGoogle ()  {

    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        alert(
          `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        );
        refreshTokenSetup(res);
      };

      const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
          `Failed to login. 😢 `
        );
      };

    
    return (
        <Container maxWidth="md">
            <div >
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSucess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            style={{marginTop: "100px" }}
            isSignedIn={true}
            />
                       
            </div>
        </Container>
        )}

export default LoginGoogle