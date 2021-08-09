import React, {useState} from 'react'

import {GoogleLogin, GoogleLogout} from "react-google-login"
import { refreshTokenSetup } from './RefreshTokenGoogleLogin';

import {Container} from "@material-ui/core";





export default function LoginGoogle() {

  const clientId="851137477773-vglvhjo7s7087gkbodilqtsolmdrol2p.apps.googleusercontent.com";
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

    const onLoginSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        setShowLoginButton(false);
        setShowLogoutButton(true);
        alert(
          `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        );
        refreshTokenSetup(res);
      };

      const onFailureSucess = (res) => {
        console.log('Login failed: res:', res);
        alert(
          `Failed to login. 😢 `
        );
      };
      const onSignoutSuccess = () => {
        alert("you have been Signout");
        setShowLoginButton(true);
        setShowLogoutButton(false);
      }
    
    return (
        <Container maxWidth="md">
            <div >
            {showLoginButton ?
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSucess={onLoginSuccess}
            onFailure={onFailureSucess}
            cookiePolicy={"single_host_origin"}
            style={{marginTop: "100px" }}
            isSignedIn={true}
            /> : null

            }
            {showLogoutButton ? 
            <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSucess={onSignoutSuccess}
            
            
            
            ></GoogleLogout>    : null
            }   
            </div>
        </Container>
    )
  }

