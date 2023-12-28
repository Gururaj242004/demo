import React from "react";

function Home() {
    return(
        <div style={headd}>
        <div style={head}>
            <h1 style={para}>NEW TO JARO? <br></br>LUCKY YOU...<br></br></h1>
            <h1 style={para1}>Courses start at ₹449. Get your new-student offer before it expires.</h1>
            
              

        </div>
        </div>
        

    ) 
        
           
        
    
}


export default Home;

const head={
    height:"30vh",
    width:"30%",
    background:"white",
    marginTop:"70px",
    marginLeft:"110px",
    position:"absolute",
    borderRadius:"20px",
    boxShadow:"rgb(0,0,0,.35) 0px 5px 15px",
    fontFamily:"Franklin Gothic Heavy"



}
const headd={
    height:"50vh",
    width:"85%",
    background:"whitesmoke",
    marginLeft:"100px",
    marginTop:"0",
    opacity:".9",
    backgroundImage:'url(https://pin.it/3wOPpwu)'
}

const para={

    paddingTop:"25px",
    paddingLeft:"15px"
}

const para1={
    paddingTop:"5px",
    paddingLeft:"15px",
    fontFamily:"Raleway",
    fontSize:"1.51rem"
}