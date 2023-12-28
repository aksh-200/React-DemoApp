import axios from "axios"
import { Link } from 'react-router-dom';
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Ajaxfun2()
{
    let [arr,setarr]=useState([]);
    
  
let [id, setid] = useState()
let [ob,setobj] = useState([])//Here we are initializing array ;
let [strobj ,stringobj] = useState()


const navigate = useNavigate();

  function rows()
  {
    return arr.map((element)=>{
      
    return(
    
      <>  
    
     
      <tr>
       {/* <td>
         {element.first_name}
       </td>
       <td>{element.last_name}</td> 
     <button type="button" class="btn btn-primary"  onClick={handler}>ok</button>
       */}

       
       <td><img src={element.avatar} onClick={() => navigate("/details" , { state: element })}></img></td>

        <td><button  type="button" class="btn btn-primary"  onClick={()=>{getinfo(element)}}> VIEW </button></td>
      </tr>
      </>
      )
    })
  }
    

 function getinfo(element)
{

  
 setobj([{...element}]);
 
 
console.log( "next line");

   //setobj(ob1);
  console.log( ob);

 }


 function objfun()
 {   return ob.map((element)=>{
        
    return(
      <>
     
    

<div class="col-sm-6" style={{}}>
      <h1>{element.first_name}</h1>
      <h2>{element.last_name}</h2>
    </div>
 <div class="col-sm-6" style={{}}>
    <img src={element.avatar}></img>
    </div>

      
      </>
      )
    })

 }
 

     async function handler(){

      try{ const response =  await  fetch("https://reqres.in/api/users?page=2")
      if(!response.ok)
      {
         throw new Error("Error")
      }
      const result = await response.json();
      await  setarr(result.data);
      console.log(result.data)
   }
   catch(err)
   {
    console.log(err)
   }

   
  }
    
    
    return(

     <>
     <button type="button" class="btn btn-primary"  onClick={handler}>ok</button>

<div class="container  shadow p-3 mb-5 bg-white rounded">
  <div class="row">
    <div class="col-sm-6 ">

     <div class="shadow p-3 mb-5 bg-white rounded">
    <table >
     <tbody>
       {rows()}
     </tbody>
        
     </table>
     </div> 
    
    </div>
    <div class="col-sm-6" style={{ padding:"50px" }}>
 
    {objfun()}

    </div>
   
  </div>
</div>  
     
     
     </>
    )
}