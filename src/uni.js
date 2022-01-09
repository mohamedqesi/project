import React from "react";
import "./App.css"
export default function Props (props){
    return(
        <div >
            <img src = {props.url} width="300px" height='150px' alt="" className="imgofprop"  />
            <h3 className="nameofuni" >{props.name}</h3>
            <p>Country: {props.bio}</p>

        </div>
    );
}