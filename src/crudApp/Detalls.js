import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detailsproductview(){
    let {productID} = useParams()
    const apiurl = `http://localhost:4000/products/${productID}`;
    let [data,setdata]=useState([])
    useEffect(()=>{
        fetch(apiurl).then((res)=>res.json()).then((data)=>setdata(data))
    },[])
    return(
    <>
  <img src={data.image} className="m" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text tx">{data.description}</p>
    <h4 className="card-text">{data.price}$</h4>
    <button  className="btn btn-primary" onClick={()=>{return alert("we will add it soon (ان شاء الله)")}}>buy</button>
    </div>
    </>
    )
}
export default Detailsproductview;