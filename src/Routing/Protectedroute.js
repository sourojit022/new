import React from 'react'
import {  Redirect} from "react-router";

export default function Protectedroute(props) {
    
 let ProtectedCom=props.component;
 let isloggedin=window.sessionStorage.getItem('token')
    console.log(isloggedin);

    return isloggedin 
              ?(<ProtectedCom/>)
              :(<Redirect to="/login"/>)
    
}
