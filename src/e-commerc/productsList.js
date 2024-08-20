import { useEffect, useState } from 'react';
import Product from './product';
import './slide.css';

function ProductList() {
    const apiUrl = 'https://fakestoreapi.com/products';
    const [data, setData] = useState([]);
    const [categores,setcategores] = useState([])
    const getProducts = ()=>{
        fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
    const getcategores = ()=>{
        fetch(`${apiUrl}/categories`)
        .then((res) => res.json())
        .then((data) => setcategores(data));
    }
    
    useEffect(() => {
        getcategores()
        getProducts()
    }, []);

        const getproductincategore = (ele)=>{
            console.log(ele)
            fetch(`${apiUrl}/category/${ele}`).then((res)=>res.json()).then((data)=>setData(data))
        }
    return (
        <>
            <h2 className="text-center p-5">Our Products</h2>
            <div className="container">
            <button className='btn btn-info' key={data.id} onClick={()=>{getProducts()}}>All</button>

                {categores.map((ele)=>{return<>
                    <button className='btn btn-info' key={data.id} onClick={()=>{getproductincategore(ele)}}>{ele}</button>
                </>})}
                <div className="row">
                    {data.map((data) =>{return(<><div className='col-lg-3 col-md-4 col-sm-12'><Product data={data}/></div> </>)})}
                </div>
            </div>
        </>
    );
}

export default ProductList;
