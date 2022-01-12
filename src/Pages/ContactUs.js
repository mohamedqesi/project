import NavBar from "../Components/NavBar";
import "../App.css"


export default function Contact (){

    return(

        <section className="contact-all" >
        <NavBar/>
        <div style={{display: "flex"}} >

        <div className="imgdiv" ></div>        

        <div className="keepintouch" >
            <h1 style={{color:"#008bd6", textAlign:"center", paddingLeft:50, fontSize:35}} >Keep us in touch!</h1>

            <div style={{marginLeft: 110}} >
            <label style={{paddingLeft:10}} >Name</label><br></br><input type="text" style={{width:"450px", height:"30px"}} className="contact-input" /><br></br><br></br>

            <label style={{paddingLeft:10}} >Age</label><br></br><input type="number" style={{width:"450px", height:"30px"}} className="contact-input" /><br></br><br></br>

            <label style={{paddingLeft:10}} >Email</label><br></br><input type="text" style={{width:"450px", height:"30px"}} className="contact-input" />

                <form><br></br>
                    <label style={{paddingLeft:10}} >Your Message</label><br></br>
                    <textarea className="contact-input" style={{width:450, height:200}} ></textarea>
                </form>

                <button className="button" >Submit</button>

            </div>
        </div>

        </div>

        </section>
    )
}