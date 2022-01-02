import NavBar from "./NavBar"
import { Link, useLocation } from "react-router-dom";
import "../App.css"

export default function Card () {

    let item = useLocation();

    console.log(item)
    return(
        <div>
            <NavBar/>
            <div className="unidiv" >
                <div>
                <img className="uniimg" src={item.state.c.url} alt="" width="400pc" />
                <h1 className="uniname" >{item.state.c.name}</h1>
                <p className="unidescription" >State: {item.state.c.country}</p>
                <p className="unidescription" >Description:  {item.state.c.description}</p>
                <a className="button" href={item.state.c.web_pages} rel="noreferrer" target="_blank" >University Link!</a>
                <Link to="/" ><button className="button" >Go To Home</button></Link>
                </div>


            </div>


        </div>
        
    )
}