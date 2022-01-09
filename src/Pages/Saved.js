import NavBar from "../Components/NavBar"
import { useLocation, Link } from "react-router-dom"
import Props from "../uni";


export default function Saved ({saved}) {

    // function removeitem(c){
        // use filter
    // }

    


    if (saved.length == 0){

        return(
            <div>
                <NavBar />
                <h1>There's No Saved Items</h1>
            </div>

            )
    }
    else{
        return(
            <div>
                <NavBar/>
                <h1>Saved Items</h1>
    
                {saved.state.savedlist.map( x => 
                    <div className="prop" > 
                    <Props
                        name = {x.name}
                        url = {x.url}
                        bio = {x.country}                  
                    />
                    <button className="btnuni" >Save</button>
                        </div>
                        )}
    
                    <Link to="/" ><button className="button1" >Go To Home</button></Link>
    
                
    
            </div>
            
        )
    }
}