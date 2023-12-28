import React,{useMemo,useState} from 'react'

function MyMemo(){
    const [arr,setArr]=useState([1,2,3,4,5])
    const [cnt,setCnt]=useState(0);

    const ShowMax=()=>
    {
        console.log("Working da")
        return Math.max(...arr)
    }
    const memoVal=useMemo(()=>ShowMax(),[arr])

    return(
       <div>
      <h1>Max Array {memoVal}</h1>
      <h1>Count Value {cnt}</h1>
      <button onClick={()=>{setArr([...arr,15])}}>Array Update</button>
      <button onClick={()=>{setCnt(cnt+1)}}>click</button>




       </div> 
    )
}

export default MyMemo;