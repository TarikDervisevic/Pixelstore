import React from "react";
import { useSelector } from "react-redux";

import classes from "./AuthButtons.module.css";
import SignInButton from "./SignInButton/SignInButton";
import LogInButton from "./LogInButton/LogInButton";
import LogOutButton from "./LogOutButton/LogOutButton";

const AuthButtons = ( props ) => {
    const screenSize = useSelector(state => state.screenSize)

    if (screenSize === "large" || screenSize === "medium") {
        if (props.loggedIn) {
            return (
                <div className={classes.AuthButtons}>
                    <LogOutButton/>
                </div> 
            ) 
        } else {
            return (
                <div className={classes.AuthButtons}>
                    <SignInButton/>
                    <LogInButton/>
                </div>
            )
        }
    } else {
        return null
    }
        
}

export default AuthButtons;