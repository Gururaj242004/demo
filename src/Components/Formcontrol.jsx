import { Component } from "react";
class Formcontrol extends Component
{
    constructor(props){
        super(props)
        this.state={
            name:"",
            Strength:""
        }
    }

    render(){
        return(
            <div>
                Name: <input type='text' name='name' value={this.state.name} onChange={(e)=>this.myChange(e)}></input>
                {this.state.Strength}
                <h1> Welcome to {this.state.name}</h1>

            </div>
        )
    }
}
export default Formcontrol;