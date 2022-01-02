import NavBar from "../Components/NavBar"
import { useLocation, Link } from "react-router-dom"
import Props from "../uni";


export default function Saved () {


    let saved = useLocation();
    console.log(saved)

    function removeitem(c){
        saved.state.delete(c)
    }


    if (saved.state == null){

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
                        name = {<Link to={`/card/${x.id}`} state={{x}} >{x.name}</Link>}
                        url = {x.url}
                        bio = {x.country}                  
                    />
                    <button className="btnuni" onClick={() => removeitem(x)} >Save</button>
                        </div>
                        )}
    
                    <Link to="/" ><button className="button1" >Go To Home</button></Link>
    
                
    
            </div>
            
        )   
    }
}