import React, {useState} from "react";
import NavBar from "../Components/NavBar"
import { useLocation } from "react-router-dom"
import Props from "../uni";


export default function Saved () {

    let saved = useLocation();
    let [items, setItems] = useState(saved.state)
    console.log(items)

    if ( items === null || items.savedlist.length === 0 ){

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

       // let norepeat = ;
    
        function removeItem (id) {
            const updatedSaved = items.savedlist.filter((x) => x.id !== id)
            setItems({savedlist: updatedSaved})
            }
        return(
            <div>
                <div className="savedBG" ></div>
                <div className="savedCN" >
                <NavBar/>
                <h1>Saved Items</h1>

                {Object.values(items.savedlist.reduce((r,o) => {
                r[o.id] = o
                return(r)
                },{})).map( (x) => 
                    <div className="prop" > 
                    <Props
                        name = {x.name}
                        url = {x.url}
                        bio = {x.country}                  
                    />
                    <button className="button" onClick={() => removeItem(x.id)} >Delete</button>
                        </div>
                        )}

                </div>


            </div>

        )   
    }
}