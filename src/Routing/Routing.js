import React  from 'react'
import {BrowserRouter,Switch,Route, Redirect} from "react-router-dom";
import About from '../comp/About';
import Home from "../comp/Home";
import Registration from "../comp/Registration";
import  Contact from "../Lazzyloaded/Contact";
import Navbar2 from "../Layout/Navbar/Navbar2";
import ProductList from '../Products/ProductList/ProductList';
import Registration1 from "../Auth/Registration/Registration1";
import Login from "../Auth/Login/Login";
import Userdetails from '../comp/Userdetails'
import Subcat from "../Products/subcat/Subcat";
import Details from "../Products/Details/Details";
import Newapi from "../comp/newapi";
import Protectedroute from "../Routing/Protectedroute";
import Profile from "../comp/Profile";
import { lazy, Suspense } from "react";


export default function Routing() {
const contact=lazy(()=>import('../Lazzyloaded/Contact'));


    return (
        <div>
            <BrowserRouter>
            <Navbar2/>
            <Switch>
                
                <Route exact  path="/home" component={Home}/>
                <Route exact path="/">
                <Redirect to= "/home"/>
                </Route>
                <Route exact path="/Products/" component={ProductList}/>
                <Route exact path="/About/:n" component={About}/>
                <Route exact path="/Contact" component={Contact}/>
                {/* <Route exact path="/Profile" component={Profile}/> */}
                <Protectedroute path="/Profile" component={Profile}/>
                
                <Route exact path="/Registration" component={Registration}/>
                <Route exact path="/Registration1" component={Registration1}/>
                <Route exact path="/Login" component={Login}/>
                <Route exact path="/Contact" component={Contact}/>
                <Route exact path="/Userdetails" component={Userdetails}/>
                <Route exact path="/Newapi" component={Newapi}/>
                <Route exact path="/Subcat/:pid" component={Subcat}/>
                <Route exact path="/Details/:pid/:pdid" component={Details}/>
                
                          
                <Route path='' render={()=>(<h1>Page Not Found</h1>)}/>

                <Route 
                 path="/Contact"
                 render={()=>(
                    <Suspense fallback={<h1>Loading...</h1>}>
                    <Contact/>
                    </Suspense>
                 )}
                 />
                

                

          </Switch>
            
            

            </BrowserRouter>

            
        </div>
    )
}
