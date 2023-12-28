import { useLocation } from "react-router-dom"

export default function Details()
{    
   
    const location = useLocation();
    const element = location.state;
    console.log(element.id);
    
    return(
        
        <>
    


{/* <div class="card bg-dark text-white" style={{alignContent:"center" , backgroundColor:"yellowgreen" , height:"500px" , width:"1500px"}}>
  <img src={element.avatar} class="card-img" alt="..."></img>
  <div class="card-img-overlay">
    <h1 class="card-title">{element.first_name} {element.last_name}</h1>
    <h3 class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h3>
    <h3 class="card-text">Last updated 3 mins ago</h3>
  </div>
</div> */}


<div class="card mb-3 " style={{width:"1000px" , height:"1000px", margin:"250px"}}>
  <div class="row g-0">
    <div class="col-md-4  shadow p-3 mb-5 bg-white rounded">
    <img src={element.avatar} class="card-img" alt="..." style={{height:"300px"}}></img>
    </div>
    <div class="col-md-8 shadow p-3 mb-5 bg-white rounded">
      <div class="card-body">
        <h1 class="card-title">{element.first_name} {element.last_name}</h1>
        <h3 class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h3>
    <h3 class="card-text">Last updated 3 mins ago</h3>  </div>
    </div>
  </div>
</div>




              
              </>
    )
}