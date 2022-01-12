import { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import "../App.css"

class Card extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: null,
            email: null,
            password: null,
            login: "Join our community!"
        }

        this.changeName = this.changeName.bind(this)
        this.changeAge = this.changeAge.bind(this)
        this.changeUni = this.changeUni.bind(this)

    }

    changeName(e){
        this.setState({name: e.target.value});
        this.setState({login: "Welcome!!"});
    }

    changeAge(e){
        this.setState({email: e.target.value});
    }

    changeUni(e){
        this.setState({password: e.target.value});
    }


    render(){
        return(
            <div>
            <NavBar/>

            <section className="loginBackgroundforall">

                <div className="upperImage" ></div>

                    <h1 className="loginWelcome" >{this.state.login} {this.state.name}</h1>

                        <div style={{textAlign:"center"}} >
                            <input type="text" placeholder="Your Name" style={{width:"400px", height:"30px"}} onChange={this.changeName} className="login-input" />
                            <br></br><br></br>
                            <input type="text" placeholder="Email Adress" style={{width:"400px", height:"30px"}} onChange={this.changeUni} className="login-input" />
                            <br></br><br></br>
                            <input type="password" placeholder="Password" style={{width:"400px", height:"30px"}} onChange={this.changeAge} className="login-input"  />
                        </div><br></br>

                        <Link to="/" ><button className="buttonoflogin" type="submit" >Login Now!!</button></Link>
            </section>


            
            </div>

        )
    }
}

export default Card;