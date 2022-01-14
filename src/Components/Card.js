import NavBar from "./NavBar"
import { Link, useLocation } from "react-router-dom";
import "../App.css"

export default function Card () {

    let item = useLocation();

    return(
        <div>
            <NavBar/>
            <div className="cardBG" >
                
                <div className="imgSpace">

                    <img className="uniimg" src={item.state.c.url} alt="" width="400pc" />
                    <h1>{item.state.c.name}</h1>
                    <a href={item.state.c.web_pages} className="c-button" target="_blank" rel="noreferrer" >University Link!</a>
                    <Link to="/" className="c-button" style={{marginRight:30}} >Go to Home</Link>
                </div>

                <div className="disofuniSpace" >
                    <h1 className="uniname" >{item.state.c.name}</h1>
                    <p className="unidescription" >Country: {item.state.c.country}</p>
                    <p className="unidescription" >Description:  {item.state.c.description}</p>
                    <div  style={{display:"flex"}} >
                        <div style={{display:"flex", marginLeft:30, float:"left"}} >
                            <p className="ratetext" >{item.state.c.rate}</p>
                            <div style={{marginTop:50, marginLeft:10}} >
                                <img className="ratestars" src={item.state.c.starsRateUrl} alt="" />
                                <p className="rp" >Rated by GOOGLE</p>
                            </div>
                        </div>
                        
                    </div>

                </div>


            </div>


        </div>
        
    )
}