import NavBar from "../Components/NavBar"
import "../App.css"


export default function Contact (){
    return(

        <div className="divall" >
            <NavBar/>
            <h1 style={{margin: 40, fontSize:25}} >UniHub: the first website in the middle east that tell people about universities here in palestine</h1>
            <div style={{display: "flex"}} >
                <div>
                    
                    <p className="text" >Owner: Mohamed Al-Qesi</p>
                    <p className="text" >Address: GazaStrip - Rafah - al-Najar hospital</p>
                    <p className="text" >E-mail:  <a href="tomail:mohamed1352005@gmail.com" >mohamed1352005@gmail.com</a></p>
                    <p className="text" >Facebook:  <a href="https://www.facebook.com/m7mdqesi/" target="_blank" >Mohamed Al-Qesi</a></p>
                    <p className="text" >Phone Number: +970597814520</p>
                </div>


        <div className="keepintouch" >
            <h1 style={{color:"#008bd6", textAlign:"center", paddingLeft:50}} >Keep us in touch!</h1>

            <div style={{marginLeft: 65}} >
                <input type="text" placeholder="Your Name here" style={{width:"210px", height:"20px"}} className="input" />
                <input type="number" placeholder="Your Age here" style={{width:"210px", height:"20px"}} className="input" />
                <form>
                    <textarea className="input" placeholder="sometext" style={{width:450, height:200}} ></textarea>
                </form>
            </div>
        </div>
            </div>



        </div>
    )
}