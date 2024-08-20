import { useState } from "react";
import axios from 'axios';
import {  useNavigate } from "react-router-dom";

function ProductAdd(){
    let navigate = useNavigate()
    const formsubmit = (event) => {
        event.preventDefault(); // Correct spelling of preventDefault
        // Your form submission logic here
        axios.post('http://localhost:4000/products', {
            title,
            price,
            description
        }).then((dataa)=>{navigate('/');})
////        fetch('http://localhost:4000/products',{
    //        method:"POST",
      //      body:JSON.stringify({
        //        title: title,
          //      price:price,
            //    description:description
        //})
        //}).then((res)=>res.json()).then((re)=>console.log(re))>
    }

    const [title,setTitle] = useState();
    const [price,setPrice]= useState(0);
    const [description,setDescription]=useState();
    
    return(
        <>
            <div><h1>ADD Product</h1></div>
            

                            <form onSubmit={formsubmit}>
                <div className="form-group">
                    <label htmlFor="productTitle">Title of product</label>
                    <input type="text" className="form-control" id="productTitle" aria-describedby="productTitle" placeholder="Enter Title" 
                    onChange={(e)=>{setTitle(e.target.value)}}
                    required />
                    <small id="emailHelp" className="form-text text-muted">Enjoy.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">price</label>
                    <input type="number" className="form-control" id="productPrice" aria-describedby="productPrice" placeholder="Enter Price number!"
                    onChange={(e)=>{setPrice(e.target.value)}}
                    required/>
                    <small id="emailHelp" className="form-text text-muted">Enjoy.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="productDescription">description</label>
                    <input type="text" className="form-control" id="productDescription" aria-describedby="productDescription" placeholder="enter Description"
                    onChange={(e)=>{setDescription(e.target.value)}}
                    required/>
                    <small id="emailHelp" className="form-text text-muted">Enjoy.</small>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
                </form>



        </>
    );
}
export default ProductAdd;