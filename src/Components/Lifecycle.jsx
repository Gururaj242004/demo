import React,{ Component } from "react"

class Lifecycle extends Component
{
    constructor(props)
    {
        super(props)

        this.state={
            name:"Guest"
        }
    }

    static getDerivedStateFromProps()
    {
        console.log("Get State");
        return null;
    }

    componentDidMount()
    {
        console.log("Did Mount Working");
    }

    MyChange=()=>{
        this.setState({
            name:"Nurture"
        })
    }

    componentDidUpdate()
    {
        alert("Its Updating")
    }

    shouldComponentUpdate()
    {
        return true;
    }

    componentWillUnmount()
    {
        alert("Delete Something")
    }

    render() {
        return(
            <div>
                <h1>Lifecyle</h1>
                <h1>{this.state.name}</h1>
                <button onClick={()=>this.MyChange()}>click</button>
            </div>
        )
    }
}

export default Lifecycle;