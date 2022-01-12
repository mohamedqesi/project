import React from "react";
import {Link} from "react-router-dom";



export default function NavBar (){
            return(
           
            <nav>
                <ul className="navLinks">
                    <li><img src="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e96db75d25d9329f74ef913615fc1333" alt="localhost:3000" width="50px" style={{ marginRight: "200px", borderRadius:"50px", height:"50px" }} /></li>
                    <li><Link to="/" style={{color:"white"}} >Home</Link></li>
                    <li><Link to="/saved" style={{color:"white"}} >Saved</Link></li>
                    <li><Link to="/contact" style={{color:"white"}} >Contact Us</Link></li>
                    <li><Link to="/login" style={{color:"white"}} >Log In/Out</Link></li>
                </ul>
            </nav>
           
        )
    }
