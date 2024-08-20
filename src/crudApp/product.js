import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Swal from 'sweetalert2';

import './ove.css'

function Product(){
     const apiurl = 'http://localhost:4000/products';
     const [data,setData]=useState([])
     useEffect(()=>{
      getAlldata()
     },[])
     const getAlldata = ()=>{
      fetch(apiurl).then((res)=>res.json()).then((data)=>setData(data))
     }

     const deleteProduct = (dataid)=>{
      Swal.fire({
        title: `Are you sure?`,
        text: 'You will not be able to recover this imaginary file!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
    }).then((datad)=>{
      if(datad.isConfirmed){
        fetch(`${apiurl}/${dataid}`,{method:"DELETE"}).then((res)=>{res.json()}).then((res)=>{
          getAlldata();
        })
      }
    })
     }

    return(<>
        <h1 className="des" >Product</h1>
        <Link type="button" class="btn btn-success" to='/addProduct' >Add product</Link>
        <table class="table ove table-striped mt-3 ">
  <thead class="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">description</th>

      <th scope="col">Price</th>
      <th scope="col">oprations</th>
    </tr>
  </thead>
  <tbody>
    
      {data.map((data)=>{return(<> 
    
      <tr>
      <th scope="row">{data.id}</th>
      <td>{data.title}</td>
      <td className="">{data.description.slice(0, 30)}...</td>
      <td>{data.price}</td>
      <tr>
          <th>
          <button type="button" class="btn btn-danger" onClick={()=>{ deleteProduct(data.id)}}>delete</button>
          <Link type="button" class="btn btn-info" to={`/product/view/${data.id}`}>view</Link>
          <button type="button" class="btn btn-primary" onClick={()=>{alert('we will make it soon (ان شاء الله)')}}>edit</button>
          </th>
        </tr>
   </tr>

    
      </>
    )})}

  </tbody>
</table>
    </>)
}
export default Product