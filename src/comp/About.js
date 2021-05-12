import React from 'react'
import {useParams  } from "react-router-dom";
export default function About({match}) {
    // const Param=useParams();
    // console.log(Param);
    console.log({match})
     let value=match.params.n;
  
    
    return (
        <div>
            <h1>Welcome to About Page</h1>
            {/* {Param.n} */}
            <h1>{value}</h1>
        </div>
    )
}
