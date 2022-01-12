import NavBar from "../Components/NavBar"
import { useLocation } from "react-router-dom"
import Props from "../uni";


export default function Saved () {


    let saved = useLocation();

    function removeitem(c){
        saved.state.delete(c)
    }


    if (saved.state == null){

        return(
            <div>
                <div className="savedBG" ></div>
                <div className="savedCN" >
                <NavBar />
                <img src="https://www.superprof.co.nz/images/teachers/teacher-home-teach-how-speak-hindi-for-tjose-who-are-hindi-persons.jpg" width="300px" height="300px" style={{marginTop:70}} alt="" />
                <h2>You didn't save anything my brodaa</h2>
                </div>

            </div>

            )
    }
    else{
        return(
            <div>
                <div className="savedBG" ></div>
                <div className="savedCN" >
                <NavBar/>
                <h1>Saved Items</h1>

                {saved.state.savedlist.map( x => 
                    <div className="prop" > 
                    <Props
                        name = {x.name}
                        url = {x.url}
                        bio = {x.country}                  
                    />
                    <button className="button" onClick={() => removeitem(x)} >Save</button>
                        </div>
                        )}

                </div>


            </div>

        )   
    }
}