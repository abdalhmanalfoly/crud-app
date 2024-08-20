import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detailsproduct(){
    const Api_URL = 'https://fakestoreapi.com/products';
    let praims = useParams()
    const [data , setdata] = useState([])
useEffect(()=>{
    fetch(`${Api_URL}/${praims.productId}`).then((res)=>res.json()).then((data)=>setdata(data))
},[])
console.log(data)

    return(<>
        
        
  <img src={data.image} className="m" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text tx">{data.description}</p>
    <h4 className="card-text">{data.price}$</h4>
    <button className="btn btn-primary">buy</button>

        </div>
    </>
    )
}
export default Detailsproduct ;