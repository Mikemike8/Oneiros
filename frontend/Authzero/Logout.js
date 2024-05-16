import { useAuth0 } from '@auth/auth0-react';
import React from "react";
const LogoutButton = () =>{


    const{logout, isAuthenticated} = useAuth0();

    return( isAuthenticated &&(
        <button onClick={() => logout()}>
            Sign out
        </button>
    )
)

}


export default LogoutButton
