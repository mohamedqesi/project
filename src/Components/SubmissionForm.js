import { Component } from "react";
import NavBar from "./NavBar";
import "../App.css"

class Card extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: null,
            age: null,
            uni: null,
            login: "Join Our Community!"
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
        this.setState({age: e.target.value});
    }

    changeUni(e){
        this.setState({uni: e.target.value});
    }


    render(){
        return(
            <div>
            <NavBar/>

            <div className="login" >

                <h1 className="joinourcommunity" >{this.state.login} {this.state.name}</h1>
                <div className="inputsf" >
                    <p className="submissionformInput" >Put your name*</p>
                    <input type="text" placeholder="Your Name here" style={{width:"400px", height:"20px"}} onChange={this.changeName} />
                    <p className="submissionformInput" >Put your age*</p>
                    <input type="number" placeholder="Your Age here" style={{width:"400px", height:"20px"}} onChange={this.changeAge}  />
                    <p className="submissionformInput" >Put your University name*</p>
                    <input type="text" placeholder="Your University name here" style={{width:"400px", height:"20px"}} onChange={this.changeUni} />

                </div>
                <div className="p_info" >
                <h2 className="nameage" >Name: <span style={{ color:"black" }} >{this.state.name}</span></h2>
                
                <h2 className="nameage" >Age: <span style={{ color:"black" }} >{this.state.age}</span></h2>
                
                <h2 className="nameage" >University: <span style={{ color:"black" }} >{this.state.uni}</span></h2>
                </div>

            </div>
            
            </div>

        )
    }
}

export default Card;